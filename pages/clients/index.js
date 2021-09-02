import Link from "next/link";

const ClientsPage = () => {
    const clients = [
        {
            id: 'max',
            name: 'Max'
        },
        {
            id: 'pepe',
            name: 'Pepe'
        },
    ]
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {
                    clients.map(client => (
                    <li key={client.id}>
                        <Link href={`/clients/${client.id}`}>{client.name}</Link>
                    </li>
                ))
                }
{/*                 <li>
                    <Link href="/clients/max">Max</Link>
                </li>
                <li>
                    <Link href="/clients/pepe">Pepe</Link>
                </li> */}
            </ul>
        </div>
    );
}

export default ClientsPage;