from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import User


router = SimpleRouter()
router.register(r'user', User, basename='user')


urlpatterns = [
    path('api/', include(router.urls)),
]