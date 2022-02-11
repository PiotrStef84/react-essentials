import './App.css';

function Header(props) {
console.log(props)

  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}


function Main(props) {
  return (
    <section>
      <p>We serve surprisingy {props.adjective} food</p>
      <ul style={{textAlign: "center"}}>
        {props.dishes.map((dish) => <li>{dish}</li>)}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
  <footer>
    <p>Since {props.year}</p>
  </footer>
  )
}

const dishes = [
  "Chicken curry",
  "Tomato soup",
  "Spaghetti"
];




function App() {
  return (
    <div className="App">
    <Header name="Adam"/>
    <Main adjective="amazing" dishes={dishes}/>
    <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
