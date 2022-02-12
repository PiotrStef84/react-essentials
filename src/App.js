import './App.css';

function Header(props) {

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
        {props.dishes.map((dish) => 
        <li key={dish.id}>{dish.title}</li>)}
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
  "Spaghetti",
  "Juice"
];

const dishObjects = dishes.map((dish,i) => ({id: i, title: dish}));


function App() {
  return (
    <div className="App">
    <Header name="Adam"/>
    <Main adjective="amazing" dishes={dishObjects}/>
    <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
