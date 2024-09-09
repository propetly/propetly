from django.core.management.base import BaseCommand
from faker import Faker
from apps.agencies.models import Agency
from apps.employees.models import Employee
from apps.properties.models import Property


class Command(BaseCommand):
    help = "Заполняет базу данных фейковыми данными"

    def handle(self, *args, **kwargs):
        fake = Faker(locale="ru")

        # Генерация агентств
        for _ in range(100):
            Agency.objects.create(
                name=fake.company(),
                address=fake.address(),
                phone=fake.phone_number(),
                email=fake.email(),
                inn="".join([str(fake.random_digit()) for _ in range(10)]),
                ogrn="".join([str(fake.random_digit()) for _ in range(13)]),
                bik=fake.random_number(digits=9),
                bank_account=fake.bban(),
                payment_account=fake.bban(),
                correction_account=fake.bban(),
                director_first_name=fake.first_name(),
                director_last_name=fake.last_name(),
                director_middle_name=fake.middle_name(),
                director_phone=fake.phone_number(),
                director_email=fake.email(),
            )

        # Генерация сотрудников
        for _ in range(100):
            Employee.objects.create(
                login=fake.user_name(),
                last_name=fake.last_name(),
                first_name=fake.first_name(),
                middle_name=fake.middle_name(),
                full_name=fake.name(),
                email=fake.email(),
                phone=fake.phone_number(),
                agency=Agency.objects.order_by("?").first(),
            )

        # Генерация объектов недвижимости
        for _ in range(100):
            Property.objects.create(
                address=fake.address(),
                price=round(
                    fake.random_number(digits=7, fix_len=False) / 100, 2
                ),
                description=fake.text(),
                agency=Agency.objects.order_by("?").first(),
                employee=Employee.objects.order_by("?").first(),
            )

        self.stdout.write(
            self.style.SUCCESS(
                "База данных успешно заполнена фейковыми данными."
            )
        )
