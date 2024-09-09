from django.db import models

from apps.agencies.models import Agency
from apps.employees.models import Employee


class Property(models.Model):
    address = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    agency = models.ForeignKey(
        Agency, on_delete=models.CASCADE, related_name="properties"
    )
    employee = models.ForeignKey(
        Employee,
        on_delete=models.SET_NULL,
        null=True,
        related_name="properties",
    )

    def __str__(self):
        return self.address

    class Meta:
        db_table = "properties"
