import React from "react";
import GET_USER_OVERVIEW from "../../requete/overview"

import { useQuery } from "@apollo/react-hooks"

const { REACT_APP_LOGIN } = process.env

function Overview() {

  const { loading, error } = useQuery(GET_USER_OVERVIEW, {
    variables: { login: REACT_APP_LOGIN }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      Overview
    </div>
  )
}

export default Overview;
