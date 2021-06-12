import { React, useState, useEffect } from 'react';
import { Form, Card, Image, Icon, Container, Header } from 'semantic-ui-react'
import './App.css';
import Repos from './Repos';

function App() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [createdAt, setCreatedAt] = useState('')
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Abdullah')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const setData = ({ name, login, followers, following, public_repos, avatar_url, created_at }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setCreatedAt(created_at);
  }

  const handleSearch = (event) => {
    setUserInput(event.target.value);
    console.log(event.target.value);
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setError(null);
          setData(data);
        }
      })
  }

  return (
    <div>
      <div className="navbar">
        <Header as="h1">
          MyTens Assesment Project
        </Header>
      </div>
      <div className="container" text style={{ justifyContent: "center", marginTop: "30px" }}>
        <Header as='h1'>Github User Finder</Header>
        <p>Type Github username below, You'll get useful information after click submit or press enter button</p>
        <div className="search">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Input
                placeholder='Name'
                name='name' onChange={handleSearch}
              />
              <Form.Button content='Submit' />
            </Form.Group>
          </Form>
        </div>
        <div className="inner-container">
          {error ? (<h1 className="error"> User "{userInput}" {error} </h1>) : (
            <div className="card">
              <Card style={{ marginBottom: "50px", height: "max-content" }}>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in {createdAt}</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='users' />
                    {followers} followers
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user plus' />
                    {following} following
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='archive' />
                    {repos} repos
                  </a>
                </Card.Content>
              </Card>
            </div>
          )}

          <Repos />
        </div>
      </div>
    </div>
  );
}

export default App;
