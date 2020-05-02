from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    """ 
        Todo Serializer Defintion
        the serializer is convert django model data into `json` format 
    """

    class Meta:
        model = Todo
        fields = ('id', 'title', 'body')
