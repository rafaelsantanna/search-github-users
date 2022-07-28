import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search() {
  const [username, setUsername] = useState('');

  return (
    <div className="search-page">
      <h2>Enter a GitHub username</h2>
      <input className="search-page__input" type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>
      <Link className="search-page__button" to={'/user/' + username}>Search</Link>
  </div>
  )
}