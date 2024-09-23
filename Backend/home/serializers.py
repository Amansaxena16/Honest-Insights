from rest_framework import serializers
from .models import SpaceData

class SpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpaceData
        fields = '__all__'
        