// По JSX
ReactDOM.render(<div>
    <h1>Hello</h1>
    <h2>World</h2>
</div>, document.getElementById("app"))
ReactDOM.render(<h3>Class Hello</h3>, document.querySelector(".appClass"))

// Без JSX
ReactDOM.render(React.createElement('input', {
    placeholder: ' Help Text',
    onClick: () => console.log("Click"),
    onMouseEnter: () => console.log("Mouse over"),
}), document.getElementById("appInput"))
// С JSX
ReactDOM.render(<input placeholder="Help text" />, document.querySelector(".appClass"))
// Либо через переменные
const elements = <input placeholder="Переменные" />
const IdElement = document.querySelector("#Const")
ReactDOM.render(elements, IdElement)