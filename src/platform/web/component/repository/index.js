import React from "react";
import GET_USER_REPOSITORIES from "../../requete/repository"

import { useQuery } from "@apollo/react-hooks"

const { REACT_APP_LOGIN } = process.env

function Repository() {

  const { loading, error, data} = useQuery(GET_USER_REPOSITORIES, {
    variables: { login: REACT_APP_LOGIN }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  console.log(data.user)

  return (
    <div>
      <div> Repositories </div>
    </div>
  )
}

export default Repository;
