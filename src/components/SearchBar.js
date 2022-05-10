import React from 'react';

export default class SearchBar extends React.Component {
    state={searchValue: ''}
    handleChange = (e) => {
        this.setState({searchValue: e.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.handleSearchKey(this.state.searchValue)
    }
    render() {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onSubmit} className='ui form'>
                    <label>Image Search</label>
                    <input className='field' type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder='search key' />
                </form>
            </div>
        )
    }
}