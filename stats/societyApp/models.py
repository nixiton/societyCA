from django.db import models
from django import forms

import logging

# Create your models here.

logger = logging.getLogger(__name__)


class Sector(models.Model):
	name = models.CharField(max_length=255, unique = True, blank=False, db_index=True)

class Society(models.Model):
	name = models.CharField(max_length=255, unique = True, blank=False, db_index=True)
	sector = models.ForeignKey(Sector, related_name='sector',on_delete=models.CASCADE)
	siren = models.IntegerField(unique = True, blank=False)


class Result(models.Model):
	ca = models.IntegerField(blank=False)
	margin = models.IntegerField(blank=False)
	ebitda = models.IntegerField(blank=False)
	loss = models.IntegerField(blank=False)
	year = models.IntegerField(blank=False)
	society = models.ForeignKey(Society, related_name='society',on_delete=models.CASCADE)
	class Meta:
		unique_together = ('ca', 'margin','ebitda', 'loss', 'year', 'society')

def get_or_create_sector(name):
	try:
		sector = Sector()
		sector.name = name
		sector.save()
		return sector
	except Exception as e:
		try:
			sector = Sector.objects.get(name = name)
			return sector
		except Exception as e:
			return None
	

def get_or_create_society(name, sector, siren):
	try:
		society = Society()
		society.name = name
		society.sector = sector
		society.siren = siren
		society.save()
		return society
	except Exception as e:
		try:
			society = Society.objects.get(name = name)
			return society
		except Exception as e:
			return None
