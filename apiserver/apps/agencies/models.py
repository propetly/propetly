from django.db import models


# Create your models here.
class Agency(models.Model):
    # Данные агентства
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)

    # Данные банка агентства
    inn = models.CharField(max_length=12, null=True, blank=True)
    ogrn = models.CharField(max_length=13, null=True, blank=True)
    bik = models.CharField(max_length=9, null=True, blank=True)
    bank_account = models.CharField(max_length=255, null=True, blank=True)
    payment_account = models.CharField(max_length=20, null=True, blank=True)
    correction_account = models.CharField(max_length=20, null=True, blank=True)

    # Данные директора агентства
    director_first_name = models.CharField(
        max_length=255, null=True, blank=True
    )
    director_last_name = models.CharField(max_length=20, null=True, blank=True)
    director_middle_name = models.CharField(
        max_length=20, null=True, blank=True
    )
    director_phone = models.CharField(max_length=20, null=True, blank=True)
    director_email = models.EmailField(null=True, blank=True)

    # Даты
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def full_name(self) -> str:
        return " ".join(
            filter(
                None,
                [
                    self.director_last_name,
                    self.director_first_name,
                    self.director_middle_name,
                ],
            )
        )

    def __str__(self):
        return f"{self.name} <{self.full_name}>"

    class Meta:
        db_table = "agencies"
