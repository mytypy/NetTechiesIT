from django.db import models
from django.contrib.auth.models import AbstractBaseUser


class UserModel(AbstractBaseUser):
    id = models.BigIntegerField(primary_key=True, auto_created=True)
    USERNAME_FIELD = "id"