import React from "react";
import GET_USER_LANGUAGES from "../../requete/language"

import { useQuery } from "@apollo/react-hooks"

const { REACT_APP_LOGIN } = process.env

function Language() {

  const { loading, error, data} = useQuery(GET_USER_LANGUAGES, {
    variables: { login: REACT_APP_LOGIN }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      Language
    </div>
  )
}

export default Language;
