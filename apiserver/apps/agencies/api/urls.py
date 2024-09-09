from django.urls import path

from .views import AgencyList, AgencyDetail

urlpatterns = [
    path("", AgencyList.as_view(), name="agency-list"),
    path("/<int:pk>", AgencyDetail.as_view(), name="agency-detail"),
]
