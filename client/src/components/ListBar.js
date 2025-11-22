import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ListBar(props) {
  return (
    <Card className='mb-2'>
      <Card.Body className='d-flex justify-content-between'>
        <p>{props.name}</p>
        <Button>Выбрать</Button>
      </Card.Body>
    </Card>
  );
}

export default ListBar;
