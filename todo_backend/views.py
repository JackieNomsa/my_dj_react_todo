from rest_framework.decorators import api_view, renderer_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from todo_backend.serializer import TodoSerializer
from todo_backend.models import Todos

@api_view(('GET',))

@csrf_exempt
def todoList(request):
    if request.method == 'GET':
        todos = Todos.objects.all()
        serializer = TodoSerializer(todos,many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

