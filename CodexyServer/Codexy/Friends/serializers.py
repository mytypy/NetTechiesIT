from rest_framework import serializers
from User.models import UserModel
from friendship.models import Friend


class FriendsSerializer(serializers.Serializer):
    sender = serializers.IntegerField()
    recipient = serializers.IntegerField()
    
    def validate_sender(self, value: int):
        sender = UserModel.objects.filter(pk=value)
        
        if sender.exists():
            return sender[0]
        
        raise serializers.ValidationError('sender`а не существует')
    
    def validate_recipient(self, value: int):
        recipient = UserModel.objects.filter(pk=value)
        
        if recipient.exists():
            return recipient[0]
        
        raise serializers.ValidationError('recipient`а не существует')
    
    def create(self, validated_data):
        return Friend.objects.add_friend(**validated_data).accept()