from rest_framework import generics
from todo_backend.models import Todos
from todo_backend.serializer import TodoSerializer

# Create your views here.
class TodoList(generics.ListCreateAPIView):
    queryset = Todos.objects.all()
    serializer_class = TodoSerializer

    

    # if request.method == 'GET':
    #     todos = Todos.objects.all()
    #     serialized = TodoSerializer(todos, many=True)
    #     return JsonResponse(serialized.data, safe=False)
        
    # elif request.method == 'POST':
    #     data = JSONParser().parse(request)
    #     serializer = TodoSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return JsonResponse(serializer.data, status=201)
    #     return JsonResponse(serializer.errors, status=400)



