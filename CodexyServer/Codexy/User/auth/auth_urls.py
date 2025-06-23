from django.urls import path, include
from rest_framework.routers import SimpleRouter
# from rest_framework_simplejwt.views import TokenRefreshView
from .auth_views import RegistrationView, CookieTokenObtainPairView
from .refresh import CookieTokenRefreshView


router = SimpleRouter()
router.register(r'auth', RegistrationView, basename='registartion')


urlpatterns = [
    path('api/', include(router.urls)),
    path('api/token/', CookieTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CookieTokenRefreshView.as_view(), name='token_refresh'),
]