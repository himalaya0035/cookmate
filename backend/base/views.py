import json
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from .models import Ingredient, Recipe,Instruction
from .serializers import RecipesSerializer,RecipeSerializer,InstructionSerialiser,IngredientSerialiser,UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password



@api_view(['GET'])
def getRoutes(request):
    print(request.user)
    routes = [
        '/api/recipes',
        '/api/recipes/<id>',
        '/api/recipe/create',
    ]
    return Response(routes)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        print(token) 
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
    data = request.data
    print(data)
    try:
        user = User.objects.create(
            first_name = data['name'],
            username = data['username'],
            email = data['email'],
            password = make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user,many=False)
        return Response(serializer.data)
    except:
        message = {'detail':"User With this email Id Already Exists"}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)    
    


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUser(request):
    user = request.user
    serializer = UserSerializer(user,many=False)
    return Response(serializer.data)



@api_view(['GET'])
def getRecipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipesSerializer(recipes,many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)


@api_view(['GET'])
def getRecipe(request,pk):
    try:
        recipe = Recipe.objects.get(id=pk)
        instructions = Instruction.objects.filter(recipe=recipe)
        ingredients = Ingredient.objects.filter(recipe=recipe)

        recipe_serializer = RecipeSerializer(recipe,many=False)
        instructions_serializer = InstructionSerialiser(instructions,many=True)
        ingredients_serializer = IngredientSerialiser(ingredients,many=True)

        returndata = recipe_serializer.data
        author = User.objects.get(id=returndata['author'])
        user_serializer = UserSerializer(author,many=False)

        returndata["instructions"] = instructions_serializer.data
        returndata["ingredients"] = ingredients_serializer.data
        returndata['authorName'] = user_serializer.data['first_name'] + ' ' + user_serializer.data['last_name']

        return Response(returndata,status=status.HTTP_200_OK)
    
    except:
        return Response({'details':"Recipe Not Found"},status=status.HTTP_404_NOT_FOUND)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createRecipe(request):
    recipedata = request.data
    instructions = json.loads(recipedata["instructions"])
    ingredients =  json.loads(recipedata["ingredients"])

    recipe = Recipe(title=recipedata["title"],author=request.user,imageOne=recipedata['imageOne'],imageTwo=recipedata['imageTwo'],imageThree=recipedata['imageThree'] ,description=recipedata["desc"],cookingTime=recipedata["cookingTime"],noOfPeople=recipedata["noOfPeople"])
    recipe.save()
    
    for i in instructions:
        instruction = Instruction(text=i["value"],recipe=recipe)
        instruction.save()
 
    for i in ingredients:
        ingredient = Ingredient(name=i["itemName"],quantity=i["quantity"],recipe=recipe)
        ingredient.save()

    return Response({'request recieved'},status=status.HTTP_201_CREATED)