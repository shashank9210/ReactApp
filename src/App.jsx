import reactImg from './assets/react-core-concepts.png';
import componentImage from './assets/components.png';
import stateImage from './assets/state-mgmt.png';
import { CORE_CONCEPTS } from './data.js'
const reactDescription = ['Fundamnetal', 'Crucial', 'Core', 'Significant'];

function generateIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return (
    <li>
    <img src={props.img} alt ="componentImage" />
    <h3>{props.tile}</h3>
    <p>{props.descrtion}</p>
  </li>
  )
}

function Header() {
  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {/* Output Dynamic data */}
      {reactDescription[generateIndex(3)]} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core Components</h2>
        <ul>
          <CoreConcept title ="Components" img = {componentImage} descrtion = "Components are corebuilding blocks of react component"/>
          <CoreConcept title ={CORE_CONCEPTS[1].title} img = {CORE_CONCEPTS[1].image} descrtion = {CORE_CONCEPTS[1].description} />
          <CoreConcept title ={CORE_CONCEPTS[2].title} img = {CORE_CONCEPTS[2].image} descrtion = {CORE_CONCEPTS[2].description}/>
          <CoreConcept title ="State" img = {stateImage} descrtion = "React-managed data which, when changed, causes the component to re-render & the UI to update."/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
