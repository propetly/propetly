from django.urls import path

from .views import PropertyList, PropertyDetail

urlpatterns = [
    path("", PropertyList.as_view(), name="property-list"),
    path("/<int:pk>", PropertyDetail.as_view(), name="property-detail"),
]
