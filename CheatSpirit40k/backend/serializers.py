from rest_framework import serializers
from .models import Units, RW



class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Units
        fields = ('Name', 'Move', 'WS', 'BS', 'Strength', 'Toughness', 'Wounds', 'Attack', 'Leadership', 'Armor', 'Inv', 'FNP', 'Type', 'Faction', 'Warlord', 'Points', 'Min', 'Max')
        
class RWSerializer(serializers.ModelSerializer):
    class Meta:
        model = RW
        fields = ('Name', 'Strength', 'Damage', 'Range', 'AP', 'Type', 'Attacks', 'Points', 'Mode', 'Special') 
	