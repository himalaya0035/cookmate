from unicodedata import name
from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes,name="routes"),
    path('recipes/',views.getRecipes,name="recipes"),
    path('recipes/<str:pk>',views.getRecipe,name='recipe'),
]