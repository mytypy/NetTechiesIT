from django.http import HttpRequest
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action


class User(ViewSet):
    permission_classes = (IsAuthenticated, ) # Просто ставим это, чтобы не париться насчет логина
    
    @action(
        methods=['GET'],
        detail=False
    )
    def user(self, request: HttpRequest): # В request.user уже сразу есть пользователь
        return Response({'response': request.user.info}, status=200)