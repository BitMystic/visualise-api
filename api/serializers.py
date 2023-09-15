# import serializer from rest_framework
from rest_framework import serializers

# import model from models.py
from .models import FileTestModel
from .models import ResultsModel

# see for docs:
# https://www.django-rest-framework.org/api-guide/relations/#nested-relationships

# Create a model serializer
class FileTestSerializer(serializers.ModelSerializer):
	# specify model and fields class
    class Meta:
        model = FileTestModel
        fields = (
                'id',
                'id_req',
                'sampleData',
                'randomData',
                'file',
                'plotBar',
                'plotDist',
                'plotScatter',
                'plotLine',
                'xaxis',
                'yaxis'
                )

class ResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResultsModel
        fields = ('id_req', 'plot', 'data', 'xaxis_name', 'yaxis_name')
