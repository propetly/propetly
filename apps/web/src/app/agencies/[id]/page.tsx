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
  const agency = await fetchAgency(params.id);

  return (
    <div>
      <div className="">
        <Link href={`/agencies/${params.id}/edit`}>Редактировать</Link>
      </div>
      <pre className="">{JSON.stringify(agency, undefined, 2)}</pre>
    </div>
  );
}
