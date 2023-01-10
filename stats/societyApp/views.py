from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response

from .services import *
from .serializers import *

class FetchingAPI(APIView):

    def get(self, request, **kwargs):
    	filePath = "static/test_python.json"
    	result = saveToDB(filePath)
    	if result["error"]:
    		return Response(result["value"], status = 500)
    	return Response(result["value"], status = 200)


class ListAPI(APIView):

    def get(self, request, **kwargs):
    	listSociety = Society.objects.select_related('sector').all()
    	listSociety = SocietySerializer(listSociety, many=True)
    	return Response(listSociety.data, status = 200)


class DetailAPI(APIView):

    def get(self, request, **kwargs):
    	try:
    		socId = request.GET['id']
    		society = Society.objects.get(id = socId)
    		society = SocietySerializer(society)

    		listResults = Result.objects.filter(society__id = socId)
    		listResults = ResultSerializer(listResults, many = True)

    		return Response({'society' : society.data, 'results' : listResults.data}, status = 200)
    	except Exception as e:
    		return Response(str(e), status = 500)
    	


