import React, {useState} from 'react';
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
const DropDownMenu = () => {
    const [selected, setSelected] = useState(options[0])
    return(
        <div className='ui container'>
            <DropDown
                label="Select a color"
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </div>
    )
}

export default DropDownMenu;