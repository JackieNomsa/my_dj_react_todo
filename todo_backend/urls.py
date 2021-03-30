from django.urls import path
from .views import todoList

urlpatterns = [
    path('todos/',todoList)
]