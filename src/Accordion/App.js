import React, {useState} from 'react';
import NewAccordion from './NewAccordion';
import WikipediaApi from './WikipediaApi';
import DropDown from './DropDown';
const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A shade of Blue",
        value: "blue"
    }
]
const items = [
    {
        title: "What is React",
        content: "React is a popular Javascript Library"
    },
    {
        title: "why use react",
        content: "React is used to create dynamic UI"
    },
    {
        title: "How to use React",
        content: "React is used by creating components"
    }
]
const App = () => {
    const [selected, setSelected] = useState(options[0])
    return(
        <div>
            <DropDown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
            {/* <WikipediaApi /> */}
            {/* <NewAccordion items={items}/> */}
        </div>
    )
}

export default App;