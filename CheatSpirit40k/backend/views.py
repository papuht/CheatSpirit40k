from django.shortcuts import render


from .models import Units, RW
from .serializers import UnitSerializer, RWSerializer
from rest_framework import generics

class UnitListCreate(generics.ListCreateAPIView):
    queryset = Units.objects.all()
    serializer_class = UnitSerializer
    
class RWListCreate(generics.ListCreateAPIView):
    queryset = RW.objects.all()
    serializer_class = RWSerializer

# Create your views here.
