import reactImg from '../assets/react-core-concepts.png';
import "./Header.css"

const reactDescription = ['Fundamnetal', 'Crucial', 'Core', 'Significant'];

function generateIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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