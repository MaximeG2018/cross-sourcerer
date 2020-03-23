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

  const repo = data.user.repositories.nodes

  let languages = []
  let language = []
  let result = {}

  repo.forEach(item => {
    item.languages.nodes.forEach(language => {
      languages.push(language.name)
    })
  })

  languages.forEach(item => {
     language.push({name: item, value: 0})
  })

  result = languages.reduce((o, key) => ({ ...o, [key]: 0 }), {});
  languages.forEach((language: any) => {
    result[language] += 1;
  });

  return (
    <div>
      Language
    </div>
  )
}

export default Language;
