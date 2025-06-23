from rest_framework import serializers
from ..models import UserModel
from ..utils import validate


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserModel
        fields = ['name', 'tag', 'email', 'password']
    
    def validate_tag(self, value):
        if UserModel.objects.filter(tag=value).exists():
            raise serializers.ValidationError("Пользователь с таким тегом уже существует.")
        
        return value
    
    def validate_password(self, value: str):
        errors = validate.validate_password(password=value)
        
        if errors:
            raise serializers.ValidationError(errors)
        
        return value
    
    def validate_email(self, value: str):
        if UserModel.objects.filter(email=value).exists():
            raise serializers.ValidationError("Пользователь с такой почтой уже зарегистрирован.")
        
        return value
    
    def create(self, validated_data):
        return UserModel.objects.create_user(**validated_data)