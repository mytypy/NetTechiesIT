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
    birthday = models.DateField(blank=True, null=True, default="2000-01-01")
    phone = models.CharField(max_length=20, blank=True, default="Не указан")
    
    objects = MyUserManager()
    USERNAME_FIELD = "email"
    
    def __str__(self):
        return self.name

    @property
    def info(self):
        return {
            "name": self.name,
            "tag": self.tag, 
            "email": self.email, 
            "birthday": self.birthday, 
            "phone": self.phone
        }