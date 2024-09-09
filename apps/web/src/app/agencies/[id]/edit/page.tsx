import { updateAgency } from '~/actions';
import Link from 'next/link';

const fetchAgency = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:8000/api/agencies/${id}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default async function AgencyPage({
  params,
}: {
  params: { id: number };
}) {
  const updateAgencyWithId = updateAgency.bind(null, params.id);

  const agency = await fetchAgency(params.id);

  return (
    <div>
      <form action={updateAgencyWithId}>
        <div className="flex flex-col">
          <h2>Об агентстве</h2>

          <input
            name="name"
            type="text"
            placeholder="Название"
            defaultValue={agency.name}
            required
          />
          <input
            name="address"
            type="text"
            placeholder="Адрес"
            defaultValue={agency.address}
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Телефон"
            defaultValue={agency.phone}
          />
          <input
            name="email"
            type="text"
            placeholder="Почта"
            defaultValue={agency.email}
          />
        </div>

        <div className="flex flex-col">
          <h2>Банковские реквезиты</h2>

          <input
            name="inn"
            type="text"
            placeholder="ИНН"
            defaultValue={agency.inn}
          />
          <input
            name="ogrn"
            type="text"
            placeholder="ОГРН"
            defaultValue={agency.ogrn}
          />
          <input
            name="bik"
            type="text"
            placeholder="БИК"
            defaultValue={agency.bik}
          />
          <input
            name="bank_account"
            type="text"
            placeholder="Название банка"
            defaultValue={agency.bank_account}
          />
          <input
            name="payment_account"
            type="text"
            placeholder="Номер счета"
            defaultValue={agency.payment_account}
          />
          <input
            name="correction_account"
            type="text"
            placeholder="Номер корр. счета"
            defaultValue={agency.correction_account}
          />
        </div>

        <div className="flex flex-col">
          <h2>Директор</h2>

          <input
            name="director_first_name"
            type="text"
            placeholder="Имя"
            defaultValue={agency.director_first_name}
          />
          <input
            name="director_last_name"
            type="text"
            placeholder="Фамилия"
            defaultValue={agency.director_last_name}
          />
          <input
            name="director_middle_name"
            type="text"
            placeholder="Отчество"
            defaultValue={agency.director_middle_name}
          />
          <input
            name="director_phone"
            type="text"
            placeholder="Номер телефона"
            defaultValue={agency.director_phone}
          />
          <input
            name="director_email"
            type="text"
            placeholder="Почта"
            defaultValue={agency.director_email}
          />
        </div>

        <button type="submit">Обновить</button>
      </form>
      <div className="">
        <Link href={`/agencies/${params.id}`}>Отменить</Link>
      </div>
    </div>
  );
}
