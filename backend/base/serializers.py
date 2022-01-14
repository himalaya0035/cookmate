from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Recipe,Instruction,Ingredient


class RecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id','title','imageOne','cookingTime','recipeTime']


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'


class InstructionSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ['text']


class IngredientSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name','quantity']