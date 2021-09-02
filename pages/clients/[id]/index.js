import {useRouter} from 'next/router';

const ClientProjectsPage = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return(
        <div>
            <h1>Projects of  a given client</h1>
        </div>
    );

}

export default ClientProjectsPage;