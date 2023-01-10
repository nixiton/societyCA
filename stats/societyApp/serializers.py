from rest_framework import serializers
from .models import *


class SocietySerializer(serializers.ModelSerializer):
	class Meta:
		model = Society
		depth = 2
		fields = (
			'id',
			'name',
			'sector',
			'siren', 
			)

class ResultSerializer(serializers.ModelSerializer):
	class Meta:
		model = Result
		depth = 0
		fields = (
			'id',
			'ca',
			'ebitda',
			'margin', 
			'loss',
			'year',
			'society'
			)