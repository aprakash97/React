import { Component } from "react";

class Carousel extends Component{
    state={
        active : 0
    }

    static defaultProps ={
        images:['http://pets-images.dev-apis.com/pets/none.jpg']
    }
    
    handleOnClick = (e) => {
        this.setState({
            active : +e.target.dataset.index,
        })
    }

    // handleOnClick = () => {
    //     console.log("CHECKING", this)
    // }

    render(){
        const {active} = this.state
        const {images} = this.props
        
        return(
            <div className="carousel">
                <img src={images[active]} alt="animal hero" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line 
                        <img
                            onClick={this.handleOnClick}
                            data-index={index}
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel