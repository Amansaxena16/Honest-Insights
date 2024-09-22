from django.urls import path
from home.views import *

urlpatterns = [
    path('',getSpaceData),
    path('postSpace/',postSpaceData)
]
