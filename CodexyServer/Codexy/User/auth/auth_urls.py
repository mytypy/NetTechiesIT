from django.urls import path
from .auth_views import auth, registration


urlpatterns = [
    path('api/auth/', auth),
    path('api/registartion/', registration)
]
