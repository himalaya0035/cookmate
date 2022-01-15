from turtle import title
from urllib.request import Request
from wsgiref.util import request_uri
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import Ingredient, Recipe,Instruction
from .serializers import RecipesSerializer,RecipeSerializer,InstructionSerialiser,IngredientSerialiser

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/recipes',
        '/api/recipes/<id>',
        '/api/recipe/create',
    ]
    return Response(routes)


@api_view(['GET'])
def getRecipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipesSerializer(recipes,many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)


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
    return Response(returndata,status=status.HTTP_200_OK)


@api_view(['POST'])
def createRecipe(request):
    recipedata = request.data
    instructions = recipedata["instructions"]
    ingredients = recipedata["ingredients"]
    print(recipedata)
    recipe = Recipe(title=recipedata["title"], description=recipedata["desc"],cookingTime=recipedata["cookingTime"],noOfPeople=recipedata["noOfPeople"])
    recipe.save()
    for i in instructions:
        instruction = Instruction(text=i["value"],recipe=recipe)
        instruction.save()


    return Response({'request recieved'},status=status.HTTP_201_CREATED)