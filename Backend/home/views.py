from rest_framework.decorators import api_view
from .models import SpaceData
from .serializers import SpaceSerializer
from rest_framework.response import Response

@api_view(['GET'])
def getSpaceData(request):
    spaces = SpaceData.objects.all()
    print(spaces)
    serializer = SpaceSerializer(spaces, many=True)
    print('getting response')
    return Response({
        'Payload' : serializer.data
    })
    
@api_view(['POST'])
def postSpaceData(request):
    data = request.data
    serializer = SpaceSerializer(data = data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'data' : serializer.data,
            'message' : 'Data has been Saved Successfully'
        })
    else:
        return Response(serializer.errors, status=400)