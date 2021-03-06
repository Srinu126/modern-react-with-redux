import React from 'react';
import SeasonCard from './components/SeasonCard';
import Spinner from './components/Spinner';

class WeatherViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' }
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
            },
            (error) => {
                this.setState({ errorMessage: error.message })
            }
        )

    }
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error : {this.state.errorMessage}</div>
            )
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonCard lat={this.state.lat} />
            )
        }
        return (
            <Spinner message="Please accept the location request" />
        )
    }
}
export default WeatherViewer;