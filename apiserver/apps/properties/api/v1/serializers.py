from rest_framework import serializers

from apps.properties.models import Property


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = "__all__"


class CreatePropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = "__all__"
