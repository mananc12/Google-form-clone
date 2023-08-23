import React from "react";
import Mcq from "./Components/mcq";
import Description from "./Components/description";
import Checkbox from "./checkbox";
import ShortAns from "./shortAns";
import ParaAns from "./paraAns";
import DropDown from "./dropDown";
import FileUpload from "./fileUpload";
import LinearScale from "./linearScale";
import MultiChoice from "./multiChoice";
import TickBox from "./tickBox";
import Bottom from "./bottom";
import Footer from "./footer";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Description />

        <Mcq />

        <Checkbox />
        <ShortAns />

        <ParaAns />

        <DropDown />

        <FileUpload />

        <LinearScale />

        <MultiChoice />

        <TickBox />
        <Bottom />
        <Footer />
      </div>
    </div>
  );
}

export default App;
