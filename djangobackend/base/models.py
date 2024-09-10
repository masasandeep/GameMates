from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class ExtendUser(AbstractUser):
    username = models.CharField(max_length=100,null=True,unique=True)
    email = models.EmailField(max_length=100,null=True,unique=True)
    def __str__(self) -> str:
        return self.username