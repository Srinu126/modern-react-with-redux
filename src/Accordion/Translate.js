import React, {useState} from 'react';
import DropDown from './DropDown';
import Convert from './Convert';
const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value:'nl'
    }
]
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')
    return(
        <div className='ui container'>
            <h1 style={{textAlign: 'center'}} className='ui header'>Text Translator</h1>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input type='text' onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <DropDown label="Select a Language" selected={language} onSelectedChange={setLanguage} options={options} />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert language={language} text={text} />
        </div>
    )
}

export default Translate;