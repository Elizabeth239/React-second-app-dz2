import logo from './logo.svg';
import './App.css';

function About(props) {
  return <div>
    <h3>ФИО: {props.name2}</h3>
    <h3>Phone: {props.phone}</h3>
    <h3>Adress: {props.adress}</h3>
    <h3>Email: {props.email}</h3>
    <h3>City: {props.city}</h3>
    <h3>Skills: {props.skills}</h3>
    <img src="images/img1.jpg"></img>
    </div>
  }

  function AboutPet(props) {
    return <div>
      <h3>Name: {props.name1}</h3>
      <h3>Years: {props.year}</h3>
      <h3>Color: {props.color}</h3>
      <img src="images/img2.jpg"></img>
      </div>
    }

function App() {
  return (
    <div className="App">
      <h1>Personal page</h1>
      <About name2="Фамилия имя отчество" phone="380123456789" adress="Мой адресс" email="qwe@gmail.com" city="Krivoy Rog" skills="a lot of skills" ></About>
    <h1>About Pet</h1>
    <AboutPet name1="Kesha" year="3" color="green"></AboutPet>
    </div>
  );
}

export default App;
