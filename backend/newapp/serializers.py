from rest_framework import serializers

from newapp.models import Details


class Detailsserializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Details
        fields=['id','subject','description']

