from django.urls import path
from .views import TodoList

urlpatterns = [
    path('todos/',TodoList.as_view())
]