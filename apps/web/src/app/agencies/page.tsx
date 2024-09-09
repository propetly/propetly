const fetchAgencies = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/agencies');

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default async function AgenciesPage() {
  const agencies = await fetchAgencies();

  return (
    <ul>
      {agencies.length &&
        agencies.map((agency: any) => (
          <li key={agency.id}>
            <pre className="">{JSON.stringify(agency, undefined, 2)}</pre>
          </li>
        ))}
    </ul>
  );
}
