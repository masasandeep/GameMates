from django.shortcuts import render
from .models import ExtendUser as User
from rest_framework import routers, serializers, viewsets
from .serializers import UserSerializer
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)