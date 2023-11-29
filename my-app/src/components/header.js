import React from "react";

// function Header() {
//   return (<header>Шапка сайта</header>)
// }

// const Header2 = () => {
//   return (<header>Шапка сайта через переменную</header>)
// }

// class Header3 extends React.Component {
//   render() {
//     return (
//       <header>Шапка сайта через класс</header>
//     )
//   }
// }

class Header4 extends React.Component{
  render(){
    return(
      <header className="header">{this.props.title}</header>
    )
  }
}

// export default Header
// export default Header2
// export default Header3
export default Header4
