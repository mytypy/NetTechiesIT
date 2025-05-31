import re


def validate_password(password: str):
    errors = []

    if len(password) < 8:
        errors.append("Пароль должен быть не короче 8 символов")

    if not re.search(r'[A-Z]', password):
        errors.append("Пароль должен содержать хотя бы одну заглавную букву")

    if not re.search(r'[a-z]', password):
        errors.append("Пароль должен содержать хотя бы одну строчную букву")

    if not re.search(r'\d', password):
        errors.append("Пароль должен содержать хотя бы одну цифру")

    if not re.search(r'[^\w\s]', password):  # спецсимволы: !@#$%^&*
        errors.append("Пароль должен содержать хотя бы один спецсимвол")

    if re.search(r'(.)\1\1+', password):  # три и более одинаковых подряд
        errors.append("Пароль не должен содержать более двух одинаковых символов подряд")
        
    return errors