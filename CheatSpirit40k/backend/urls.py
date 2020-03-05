from django.urls import path
from . import views

urlpatterns = [
    path('api/units/', views.UnitListCreate.as_view() ),
    path('api/RW/', views.RWListCreate.as_view() ),  
]