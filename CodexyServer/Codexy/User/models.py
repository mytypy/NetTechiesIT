from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class MyUserManager(BaseUserManager):
    def create_user(self, name, tag, password, **others):

        user = self.model(
            name=name,
            tag=tag ,
            **others
        )

        user.set_password(password)
        
        user.save(using=self._db)
        return user
    
    
class UserModel(AbstractBaseUser):
    name = models.CharField(max_length=120)
    tag = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True)
    birthday = models.DateField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True)
    
    objects = MyUserManager()
    USERNAME_FIELD = "email"
    
    def __str__(self):
        return self.name