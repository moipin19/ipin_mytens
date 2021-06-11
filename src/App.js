import React from 'react';
import { Form, Card, Image, Icon } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div>
      <div className="navbar">MyTens Assesment Project</div>
      <div className="search">
        <Form>
          <Form.Group>
            <Form.Input
              placeholder='Name'
              name='name'
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
      </div>
      <div className="card">
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default App;
