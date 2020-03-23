import React from "react";
import GET_USER_FUNFACTS from "../../requete/funfact"

import { useQuery } from "@apollo/react-hooks"

const { REACT_APP_LOGIN } = process.env

function FunFact() {

  const { loading, error } = useQuery(GET_USER_FUNFACTS, {
    variables: { login: REACT_APP_LOGIN }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      FunFact
    </div>
  )
}

export default FunFact;
