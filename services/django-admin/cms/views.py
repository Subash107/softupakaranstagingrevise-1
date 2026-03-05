from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Categories, Feedback, Products, Users


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def admin_dashboard(request):
    return Response(
        {
            "categories": Categories.objects.count(),
            "products": Products.objects.count(),
            "feedback": Feedback.objects.filter(status="published").count(),
            "users": Users.objects.count(),
        }
    )
