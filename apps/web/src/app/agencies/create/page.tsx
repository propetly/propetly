import { createAgency } from '~/actions';

export default async function CreateAgencyPage() {
  return (
    <div>
      <form action={createAgency}>
        <div className="flex flex-col">
          <h2>Об агентстве</h2>

          <input name="name" type="text" placeholder="Название" required />
          <input name="address" type="text" placeholder="Адрес" required />
          <input name="phone" type="text" placeholder="Телефон" />
          <input name="email" type="text" placeholder="Почта" />
        </div>

        <div className="flex flex-col">
          <h2>Банковские реквезиты</h2>

          <input name="inn" type="text" placeholder="ИНН" />
          <input name="ogrn" type="text" placeholder="ОГРН" />
          <input name="bik" type="text" placeholder="БИК" />
          <input name="bank_account" type="text" placeholder="Название банка" />
          <input name="payment_account" type="text" placeholder="Номер счета" />
          <input
            name="correction_account"
            type="text"
            placeholder="Номер корр. счета"
          />
        </div>

        <div className="flex flex-col">
          <h2>Директор</h2>

          <input name="director_first_name" type="text" placeholder="Имя" />
          <input name="director_last_name" type="text" placeholder="Фамилия" />
          <input
            name="director_middle_name"
            type="text"
            placeholder="Отчество"
          />
          <input
            name="director_phone"
            type="text"
            placeholder="Номер телефона"
          />
          <input name="director_email" type="text" placeholder="Почта" />
        </div>

        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
