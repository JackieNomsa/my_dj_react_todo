from rest_framework import generics
from todo_backend.models import Todos
from todo_backend.serializer import TodoSerializer

# Create your views here.
class TodoList(generics.ListCreateAPIView):
    queryset = Todos.objects.all()
    serializer_class = TodoSerializer

