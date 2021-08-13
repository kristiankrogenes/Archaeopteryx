from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('users', views.index),
    path('users/<int:id>', views.index),
    path('scores', views.index),
    path('courses', views.index),
    path('login', views.index)
]