from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import FriendsViewSet


router = SimpleRouter()
router.register(r'friends', FriendsViewSet, basename='friends')


urlpatterns = [
    path('api/', include(router.urls)),
]