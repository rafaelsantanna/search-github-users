import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import logo from '../../assets/logo.png';

export default function User({match}) {
  const [user, setUser] = useState({});
  const [respos, setRepos] = useState([]);
  
  useEffect(() => {
    (async () => {
      let userStorage = localStorage.getItem('users');
      let repoStorage = localStorage.getItem('repos');
      let username = localStorage.getItem('username');

      if(userStorage && repoStorage && username === match.params.username) {
        setUser(JSON.parse(userStorage));
        setRepos(JSON.parse(repoStorage));
      } else {
        const responseUsers = await axios.get('https://api.github.com/users/' + match.params.username);
        const responseRepos = await axios.get('https://api.github.com/users/' + match.params.username + '/repos');
        localStorage.setItem('users', JSON.stringify(responseUsers.data));
        localStorage.setItem('repos', JSON.stringify(responseRepos.data));
        localStorage.setItem('username', match.params.username);
        setUser(responseUsers.data);
        setRepos(responseRepos.data);
      }

    })();
  }, [match.params.username]);

  return (
    <div className="user-page">
      <Link to='/'>
        <img className='logo' src={logo} alt="Github Logo" />
      </Link>
      
      <div className='user'>
        <img className='user__photo' src={user.avatar_url} alt="" />
        <p className='user__name'>{user.name}</p>
        <p className='user__total-repositories'>Total repositories: {user.public_repos}</p>
      </div>

      <div className='repositories'>
        {respos && respos.map(item => (
          <div key={item.id} className='repositories__item'>
            <p className='repositories__name'>{item.name}</p>
            
            <p className='repositories__description'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}