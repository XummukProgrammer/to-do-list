import { useContext } from 'react';
import ListBar from '../components/ListBar';
import { Context } from '..';
import Container from 'react-bootstrap/Container'

function ListsPage() {
    const { lists } = useContext(Context)
    return (
        <Container>
            <p>Списки задач:</p>
            {lists.map(({name}) => 
                <ListBar name={name} />
            )}
        </Container>
    );
}

export default ListsPage;
