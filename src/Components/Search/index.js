import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import logo from '../../assets/logo.png';

export default function Search() {
  const [username, setUsername] = useState('');

  return (
    <div className="search-page">
      <img className='logo' src={logo} alt="Github Logo" />
      <h2 className='search-page__title'>Enter a GitHub username</h2>
      <input className="search-page__input" type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>
      <Link className="search-page__button" to={'/user/' + username}>Search</Link>
  </div>
  )
}