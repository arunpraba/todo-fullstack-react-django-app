from rest_framework import generics
from .models import Todo
from .serializer import TodoSerializer


class ListTodo(generics.ListAPIView):
    """ List of all todos """

    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(generics.RetrieveAPIView):
    """ Detail todo """

    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
