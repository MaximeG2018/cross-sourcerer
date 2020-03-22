import React from "react";
import GET_USER_TECHNOLOGIES from "../../requete/technologie"

import { useQuery } from "@apollo/react-hooks"

const { REACT_APP_LOGIN } = process.env

function Technologie() {

  const { loading, error, data} = useQuery(GET_USER_TECHNOLOGIES, {
    variables: { login: REACT_APP_LOGIN }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      Technologie
    </div>
  )
}

export default Technologie;
