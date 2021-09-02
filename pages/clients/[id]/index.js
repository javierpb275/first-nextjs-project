import {useRouter} from 'next/router';

const ClientProjectsPage = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    const loadProjectHandler = () => {
        //router.push('/clients/pepe/projecta');
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'pepe', clientprojectid: 'projecta'}
        });
    }
    return(
        <div>
            <h1>Projects of  a given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );

}

export default ClientProjectsPage;