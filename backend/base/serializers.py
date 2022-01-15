from dataclasses import field
from lib2to3.pgen2 import token
from pickletools import read_bytes1
from pyexpat import model
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Recipe,Instruction,Ingredient


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','first_name','last_name']



class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','username','email','first_name','last_name','token']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


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
        fields = ['id','text']


class IngredientSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id','name','quantity']