# import viewsets
from rest_framework import status, viewsets, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

# import local data
from .serializers import FileTestModel, FileTestSerializer, ResultsSerializer
from .models import ResultsModel
from .analysis import addEntry, getXY

@api_view(["GET", "POST"])
def FileTestList(request, format=None):
    print("-------post request seen---------")
    print(request.data)
    data = request.data
    serializer = FileTestSerializer(data=data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        print("-------post request serialized---------")

        if serializer.data['file']:
            # TODO django adds random strint at the back of filenames evertime
            # new file with same is uploaded
            # need to think about handling that so analysis is performed on the
            # most recent file
            # right now it just grabs first uploaded file by that name
            filename = request.FILES['file'].name
            xy = getXY(serializer.data, filename)
        else:
            xy = getXY(serializer.data, '')

        addEntry(serializer.data, xy)
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED) 
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def GetFileTest(request, pk, format=None ):
    print("-------get request seen---------")
    file = FileTestModel.objects.get(id_req=pk)
    serializer = FileTestSerializer(file)
    return Response(serializer.data)

@api_view(["GET"])
def GetFileTestList(request, format=None ):
    print("-------get request seen---------")
    file = FileTestModel.objects.all()
    serializer = FileTestSerializer(file, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def GetResults(request, pk, format=None):
    print('------get request seen--------')
    results = ResultsModel.objects.get(id_req=pk)
    serializer = ResultsSerializer(results)
    return Response(serializer.data)
