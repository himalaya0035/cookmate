from unicodedata import name
from django.urls import path
from . import views



urlpatterns = [
    path('',views.getRoutes,name="routes"),
    path('recipes/',views.getRecipes,name="recipes"),
    path('recipes/<str:pk>',views.getRecipe,name='recipe'),
    path('recipe/create',views.createRecipe,name="createRecipe"),
    path('users/profile/', views.getUser, name='get_user_profile'),
    path('users/login/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register_user'),
]