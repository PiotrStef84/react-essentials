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



function App() {
  return (
    <div className="App">
    <Header name="Adam"/>
    <Main adjective="amazing"/>
    <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
