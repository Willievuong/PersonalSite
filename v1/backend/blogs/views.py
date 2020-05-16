from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view 
from rest_framework.response import Response 
from .models import *
from .serializer import *


# Blog 
@api_view(['GET', 'POST'])
def BlogView(request):
    if request.method == 'GET':
        queryset = Blog.objects.all()
        serializer = BlogSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Blog 
@api_view(['GET', 'PUT', 'DELETE'])
def BlogDetailsView(request, pk):
    try:
        query = Blog.objects.get(pk=pk)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BlogSerializer(query)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = BlogSerializer(query, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        query.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
