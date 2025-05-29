from django.http import HttpRequest, JsonResponse


def auth(request: HttpRequest):
    return JsonResponse({'response': 'auth'})


def registration(request: HttpRequest):
    return JsonResponse({'response': 'registartion'})