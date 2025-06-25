from rest_framework import serializers
from User.models import UserModel
from friendship.models import Friend


class FriendsSerializer(serializers.Serializer):
    sender = serializers.IntegerField()
    recipient = serializers.IntegerField(required=False)
    
    def validate_sender(self, value: int):
        sender = UserModel.objects.filter(pk=value)
        
        if sender.exists():
            return value
        
        raise serializers.ValidationError('sender`а не существует')
    
    def validate_recipient(self, value: int):
        recipient = UserModel.objects.filter(pk=value)
        
        if recipient.exists():
            return value
        
        raise serializers.ValidationError('recipient`а не существует')
    
    def create(self, validated_data):
        try:
            sende = UserModel.objects.get(pk=validated_data['sender'])
            rec = UserModel.objects.get(pk=validated_data.get('recipient'))
        except Exception:
            return {'message': 'recipient`а не существует', 'code': 400}
        
        Friend.objects.add_friend(from_user=sende, to_user=rec).accept()
        
        return {'message': "Вы теперь друзья :)", 'code': 201}