from django.urls import path
from .views import *

urlpatterns = [
    path('todos/',todo_list)
]