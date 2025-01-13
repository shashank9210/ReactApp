import { useState } from 'react';
import componentImage from './assets/components.png';
import stateImage from './assets/state-mgmt.png';
import { CORE_CONCEPTS } from './data.js'
import Header from './Components/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx';
import TabButton from './TabButton/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  let tabContent = 'Select a button to see the example -1';

  function selectedTab(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Components added Dynamically</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (<CoreConcept key={item.title} {...item}  />)
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}  onSelect={() => selectedTab('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}  onSelect={() => selectedTab('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}  onSelect={() => selectedTab('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}  onSelect={() => selectedTab('state')}>State</TabButton>
          </menu>
        </section>
        {!selectedTopic ? <p>Select a Topic</p> : ''}
        {selectedTopic && (
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              {EXAMPLES[selectedTopic].code}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
