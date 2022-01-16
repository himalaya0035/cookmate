import imp
from pyexpat import model
import re
from statistics import mode
from turtle import title
from django.db import models
from django.contrib.auth.models import User


class Recipe(models.Model):
    author = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    title = models.CharField(max_length=500,null=False,blank=False)
    imageOne = models.ImageField(null=True, blank=True)
    imageTwo = models.ImageField(null=True,blank=True)
    imageThree = models.ImageField(null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    cookingTime = models.IntegerField(null=True,blank=True,default=0)
    recipeTypes = [
        ('Breakfast','Breakfast'),
        ('Lunch','Lunch'),
        ('Snacks','Snacks'),
        ('Dinner','Dinner')
    ]
    recipeTime = models.CharField(max_length=20,choices=recipeTypes,default='Breakfast')
    noOfPeople = models.IntegerField(null=True,blank=True,default=2)
    # created_at = models.DateTimeField(auto_now_add=True)


    
class Ingredient(models.Model):
    name = models.CharField(max_length=100,null=False)
    quantity = models.CharField(max_length=20,null=False)
    recipe = models.ForeignKey(Recipe,on_delete=models.CASCADE,null=True)

class Instruction(models.Model):
    text = models.TextField(null=False,blank=False)
    recipe = models.ForeignKey(Recipe,on_delete=models.CASCADE,null=False)
