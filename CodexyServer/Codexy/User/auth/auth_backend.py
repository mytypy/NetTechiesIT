from Codexy import settings
from django.http import HttpRequest
from rest_framework_simplejwt.authentication import JWTAuthentication


class CookieJWTAuthentication(JWTAuthentication):
    
    def authenticate(self, request: HttpRequest):
        header = self.get_header(request) # Получение заголовка авторизации (если есть)

        if header is None:
            raw_token = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE']) or None
        else:
            raw_token = self.get_raw_token(header)
            
        if raw_token is None: # Если токена нет, то None(не авторизован)
            return None

        validated_token = self.get_validated_token(raw_token) # Валидация токена
        
        return self.get_user(validated_token), validated_token # Пара пользователь + токен