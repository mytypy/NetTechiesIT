from django.http import HttpRequest
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from .auth_serializers import RegistrationSerializer
from ..utils.set_jwt import set_cookies


class RegistrationView(ViewSet):
    serializer_class = RegistrationSerializer
    
    @action(
        methods=['POST'],
        detail=False
    )
    def registration(self, request: HttpRequest):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
                
        return Response({'response': 'Регистрация прошла успешно'}, status=201)


class CookieTokenObtainPairView(TokenObtainPairView):
    
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        
        if response.status_code == 200:
            access = response.data.get('access')
            refresh = response.data.get('refresh')
            
            response = set_cookies(response=response, access=access, refresh=refresh)
            response.data['response'] = 'Вы авторизованы!'
            del response.data['access']
            del response.data['refresh']
        
        return response