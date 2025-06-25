from rest_framework.permissions import IsAuthenticated
from django.http import HttpRequest
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from .serializers import FriendsSerializer
from friendship.models import Friend
from User.models import UserModel


class FriendsViewSet(ViewSet):
    permission_classes = (IsAuthenticated, ) # Просто ставим это, чтобы не париться насчет логина
    serializer_class = FriendsSerializer
    
    @action(
        methods=['POST'],
        detail=False
    )
    def add_friend(self, request: HttpRequest):
        serializer = self.serializer_class(data=request.POST)
        serializer.is_valid(raise_exception=True)
        
        data = serializer.validated_data
        sender = data.get('sender')
        recipient = data.get('recipient')

        fd = Friend.objects.filter(from_user_id=sender, to_user_id=recipient)
        
        if fd.exists():
            return Response({'error_friends': 'Вы уже дружите'}, status=400)
        else:
            mesg = serializer.save()
        
        return Response({'response': mesg['message']}, status=mesg['code'])

    @action(
        methods=['POST'],
        detail=False
    )
    def remove_friend(self, request: HttpRequest):
        serializer = self.serializer_class(data=request.POST)
        serializer.is_valid(raise_exception=True)
        
        data = serializer.validated_data
        try:
            sender = UserModel.objects.get(pk=data.get('sender'))
            recipient = UserModel.objects.get(pk=data.get('recipient'))
        except Exception:
            return Response({'response': 'recipient`а не существует'}, status=400)
        
        Friend.objects.remove_friend(sender, recipient)
        return Response({'response': 'Вы больше не друзья :('}, status=200)
    
    @action(
        methods=['POST'],
        detail=False
    )
    def friends(self, request: HttpRequest):
        ...