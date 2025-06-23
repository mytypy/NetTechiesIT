from Codexy.settings import SIMPLE_JWT
from rest_framework.response import Response


def set_cookies(response: Response, access: str, refresh: str):
    response.set_cookie(
            key='refresh_token',
            value=refresh,
            httponly=True,
            samesite='None', # Возможно поменять, если будут ошибки(Меняем на None)
            secure=True,  # Поставить True, если используется HTTPS
            max_age=SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'].total_seconds()
        )
    
    response.set_cookie(
            key='access_token',
            value=access,
            httponly=True,
            samesite='None', # Возможно поменять, если будут ошибки(Меняем на None)
            secure=True,  # Поставить True, если используется HTTPS
            max_age=SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'].total_seconds()
        )
    
    return response


# response.set_cookie(
#     key='refresh_token',
#     value=refresh,
#     httponly=True,
#     samesite='None',
#     secure=True,  # ВАЖНО: Только при HTTPS
#     max_age=SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'].total_seconds()
# )

# response.set_cookie(
#     key='access_token',
#     value=access,
#     httponly=True,
#     samesite='None',
#     secure=True,  # ВАЖНО: Только при HTTPS
#     max_age=SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'].total_seconds()
# ) В продакшене сделать так