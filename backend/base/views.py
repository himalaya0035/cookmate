from dis import Instruction
from turtle import title
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Ingredient, Recipe,Instruction
from .serializers import RecipesSerializer,RecipeSerializer,InstructionSerialiser,IngredientSerialiser

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/recipes',
        '/api/recipe/<id>',
        '/api/recipe/create',
    ]
    return Response(routes)


@api_view(['GET'])
def getRecipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipesSerializer(recipes,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getRecipe(request,pk):
    recipe = Recipe.objects.get(id=pk)
    instructions = Instruction.objects.filter(recipe=recipe)
    ingredients = Ingredient.objects.filter(recipe=recipe)
    recipe_serializer = RecipeSerializer(recipe,many=False)
    instructions_serializer = InstructionSerialiser(instructions,many=True)
    ingredients_serializer = IngredientSerialiser(ingredients,many=True)
    returndata = recipe_serializer.data
    returndata["instructions"] = instructions_serializer.data
    returndata["ingredients"] = ingredients_serializer.data
    return Response(returndata)