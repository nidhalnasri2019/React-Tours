import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
    state = {
        showinfo: false
    }
    handelinfo = () => {
        this.setState({
            showinfo: !this.state.showinfo
        })
    }
    render() {
        const {id, city, img, name, info } = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="img" />
                    <div className="close-btn">
                        <span><i className="fa fa-window-close" onClick={()=>{removeTour(id)}}/></span>
                    </div>

                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name} </h4>
                    <h5>info{" "}
                        <span onClick={this.handelinfo}><i className="fa fa-caret-square-down" /></span>
                        {this.state.showinfo && <p>{info}</p>}

                    </h5>
                </div>
            </article>
        );
    }
}

export default Tour;