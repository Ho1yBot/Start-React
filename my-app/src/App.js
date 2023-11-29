import React from "react";
import Header4 from "./components/header";
import Image from "./components/image";
import honey from "./img/Honey.png";

class App extends React.Component {
  helpText = "Help text"
  render() {
    return (
      <div className="name">
        {/* <Header />
        <Header2 />
        <Header3 /> */}
        <Header4 title="А вот тут обращение через атрибут"/>
        <Header4 title="Тут обращение к той же компоненте через атрибут, но новый текст"/>
        <h1>{this.helpText}</h1>
        <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver} />
        <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
        <Image image={honey}/>
        <img src={honey}/> 
      </div>
    )
  }
  inputClick() {console.log("Clicked")};
  mouseOver() {console.log("Mouse Over");}
}

export default App;
