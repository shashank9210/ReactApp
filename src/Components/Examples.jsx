import React, { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES_ARRAY } from "../data";
import Section from "./Section";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('');
    let tabContent = 'Select a button to see the example -1';

    function selectedTab(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedTopic);
    };

    return (
        <Section title = "Example" id="examples">
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => selectedTab('components')}>Component</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => selectedTab('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => selectedTab('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => selectedTab('state')}>State</TabButton>
            </menu>

            {!selectedTopic ? <p>Select a Topic</p> : ''}
            { selectedTopic && (
                <div id='tab-content'>
                    <h3>{EXAMPLES_ARRAY[selectedTopic].title}</h3>
                    <p>{EXAMPLES_ARRAY[selectedTopic].description}</p>
                    <pre>
                        {EXAMPLES_ARRAY[selectedTopic].code}
                    </pre>
                </div>
            )}
        </Section>
    )
}