from django.http import HttpRequest
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from .auth_serializers import RegistrationSerializer, LoginSerializer


class RegistrationView(ViewSet):
    serializer_class = RegistrationSerializer
    
    @action(
        methods=['POST'],
        detail=False
    )
    def registration(self, request: HttpRequest):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        
        response = Response({'response': 'Регистрация прошла успешно'}, status=201)
        
        response.set_cookie(
            key='refresh_token',
            value=str(refresh),
            httponly=True,
            samesite='Lax', # Возможно поменять, если будут ошибки
            secure=False  # Поставить True, если используется HTTPS
        )
        response.set_cookie(
            key='access_token',
            value=str(refresh.access_token),
            httponly=True,
            samesite='Lax', # Возможно поменять, если будут ошибки
            secure=False  # Поставить True, если используется HTTPS
        )
        
        return response
    

class LoginView(ViewSet):
    serializer_class = LoginSerializer
    
    @action(
        methods=['POST'],
        detail=False
    )
    def login(self, request: HttpRequest):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        
        return Response(**user)