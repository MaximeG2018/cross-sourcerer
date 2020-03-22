import React from "react";
import "./index.css";

import Header from "./platform/web/component/header"
import Overview from "./platform/web/component/overview"
import Language from "./platform/web/component/language"
import Technologie from "./platform/web/component/technologie"
import FunFact from "./platform/web/component/funfact"
import Repository from "./platform/web/component/repository"

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
