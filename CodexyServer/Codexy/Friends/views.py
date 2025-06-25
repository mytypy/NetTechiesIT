from rest_framework.permissions import IsAuthenticated
from django.http import HttpRequest
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from .serializers import FriendsSerializer
from friendship.models import Friend


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
        sender = data['sender']
        recipient = data['recipient']
               
        fd = Friend.objects.filter(from_user_id=sender.pk, to_user_id=recipient.pk)
        
        if fd.exists():
            return Response({'error_friends': 'Вы уже дружите'}, status=400)
        else:
            serializer.save()
        
        return Response({'response': 'Вы теперь друзья :)'}, status=200)

    @action(
        methods=['POST'],
        detail=False
    )
    def remove_friend(self, request: HttpRequest):
        serializer = self.serializer_class(data=request.POST)
        serializer.is_valid(raise_exception=True)
        
        data = serializer.validated_data
        sender = data['sender']
        recipient = data['recipient']
        
        Friend.objects.remove_friend(sender, recipient)
        return Response({'response': 'Вы больше не друзья :('}, status=200)