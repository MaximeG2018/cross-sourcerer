import React from "react";
import GET_USER_HEADER from "../../requete/header"

import { useQuery } from "@apollo/react-hooks"

const { REACT_APP_LOGIN } = process.env

function Header() {

  const { loading, error, data} = useQuery(GET_USER_HEADER, {
    variables: { login: REACT_APP_LOGIN }
  });


  if (loading) return null;
  if (error) return `Error! ${error}`;
  
  const user = data.user;

  return (
    <div>
        <div>
          Share your profile on:
            <p style={{textDecoration: 'underline'}}> Linkedin </p>
            <p style={{textDecoration: 'underline'}}> Twitter </p>
            <p style={{textDecoration: 'underline'}}> Facebook </p>
            <p style={{textDecoration: 'underline'}}> Get HTML </p>
            <p> {user.login} </p>
            <img src={user.avatarUrl} alt="avatar" />
            <p> Repos : {user.repositories.totalCount} </p>
            <p> Followers : {user.followers.totalCount} </p>
            <p> Following : {user.following.totalCount} </p>
        </div>
    </div>
  )
}

export default Header;
