import React, { useState, useEffect } from 'react';
import axios from 'axios';
const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('programming');
    const [debounceTerm, setDebounceTerm] = useState(searchValue)
    const [results, setResults] = useState([])
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceTerm(searchValue)
        }, 1000);
        return () => {
            clearTimeout(timerId)
        }

    }, [searchValue])
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceTerm
                }
            })
            setResults(data.query.search)
        }
        if(debounceTerm){
            search();
        }

    }, [debounceTerm])
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className='ui button'>Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="ui segment">
                <form onSubmit={(e) => e.preventDefault()} className='ui form'>
                    <label>Text Search</label>
                    <input className='field' type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                </form>
                <div className='ui celled list'>
                    {renderedResults}
                </div>
            </div>

        </>
    )

}

export default SearchBar;