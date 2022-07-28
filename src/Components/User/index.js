import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function User({match}) {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    (async () => {
      const response = await axios.get('https://api.github.com/users/' + match.params.username);
      setUser(response.data);
      console.log(response.data);
    })();

  }, [match.params.username]);

  return (
    <div className="user-page">
      Profile picture
      Name
      total numbers repositories
      list of repositories (name and description)
    </div>
  )
}