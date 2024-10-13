
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample(props) {
  return (
  
    
        <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
          <Card.Title className='fs-bold'>{props.title}</Card.Title>
          <Card.Text>
          {props.description}
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
      </Card.Body>
      </Card>
    
   
  );
}
    

export default BasicExample;



  






