from django.urls import path,include
from .views import UserViewSet
from rest_framework import routers
from .views import router
urlpatterns = [
    #path('songs/', UserViewSet, name="users-all"),
    path('router/', include(router.urls)),
]