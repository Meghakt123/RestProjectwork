from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from newapp.models import Details
from newapp.serializers import Detailsserializer


# Create your views here.
@api_view(['POST'])
def details_view(request):
    serializer=Detailsserializer()
    if request.method=='POST':
        serializer=Detailsserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def home(request):
    sample=Details.objects.all()
    serializer=Detailsserializer(sample,many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
def data_delete(request,id):
    data=Details.objects.get(id=id)
    print(data)
    data.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)