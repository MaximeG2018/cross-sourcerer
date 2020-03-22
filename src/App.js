import React from "react";
import "./index.css";

import Header from "./component/header"
import Overview from "./component/overview"
import Language from "./component/language"
import Technologie from "./component/technologie"
import FunFact from "./component/funfact"
import Repository from "./component/repository"

function App() {

  return (
    <div>
      <Header />
      <Overview />
      <Language />
      <Technologie />
      <FunFact />
      <Repository />
    </div>
  )
}

export default App;
