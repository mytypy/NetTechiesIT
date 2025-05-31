from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .auth_views import RegistrationView, LoginView


router = SimpleRouter()
router.register(r'auth', RegistrationView, basename='registartion')
router.register(r'auth', LoginView, basename='login')

urlpatterns = [
    path('api/', include(router.urls)),
]