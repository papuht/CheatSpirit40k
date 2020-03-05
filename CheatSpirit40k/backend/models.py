from django.db import models


class Units(models.Model):
    Name = models.CharField(max_length=50, primary_key = True)
    Move = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    WS = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    BS = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Strength = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Toughness = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Wounds = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Attack = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Leadership = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Armor = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Inv = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    FNP = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Type = models.CharField(max_length=15, null = False)
    Faction = models.CharField(max_length=20, null = False)
    Warlord = models.BooleanField(null = False)
    Points = models.IntegerField(null = False)
    Min = models.IntegerField(null = False)
    Max = models.IntegerField(null = False)
    
    
class RW(models.Model):
    Name = models.CharField(max_length=50, primary_key = True)
    Strength = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Damage = models.CharField(max_length=10, null = False)
    Range =  models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    AP = models.DecimalField(null = False, max_digits = 5, decimal_places = 2)
    Type = models.CharField(max_length=15, null = False)
    Attacks = models.CharField(max_length=10, null = False)
    Points = models.IntegerField(null = False)
    Mode = models.BooleanField(null = False)
    Special = models.BooleanField(null = False)
    
    
	


# Create your models here.
