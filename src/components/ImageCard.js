import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state={spanValue:0}
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10 +1)
        this.setState({spanValue: spans  })
        console.log(this.imageRef.current.clientHeight)
    }
    render() {
        return(
            <div style={{gridRowEnd: `span ${this.state.spanValue}`}}>
                <img
                    ref = {this.imageRef} 
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                />
            </div> 
        )
    }
}

export default ImageCard;