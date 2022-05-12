import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class ImageViewer extends React.Component {
    state = { searchKey: '', apiResponse: [] }
    handleSearchKey = async (value) => {
        this.setState({ searchKey: value })
        const response = await unsplash.get(`/search/photos`, {
            params: { query: value }
        })
        this.setState({ apiResponse: response.data.results })
    }
    render() {

        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar handleSearchKey={this.handleSearchKey} />
                <ImageList images={this.state.apiResponse}/>
            </div>
        )
    }
}

export default ImageViewer;
