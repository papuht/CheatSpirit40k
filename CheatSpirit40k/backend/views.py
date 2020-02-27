from django.shortcuts import render


from .models import Unit
from .serializers import UnitSerializer
from rest_framework import generics

class UnitListCreate(generics.ListCreateAPIView):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer

# Create your views here.
