import componentImage from './assets/components.png';
import stateImage from './assets/state-mgmt.png';
import { CORE_CONCEPTS } from './data.js'
import Header from './Components/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx';

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
