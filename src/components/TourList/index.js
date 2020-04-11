import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import './TourList.scss';
import { tourData } from '../tourData.js';

class TourList extends Component {
   state={
       tours: tourData
         }
     removeTour = id => {
         const {tours} = this.state;
         const sortedTour= tours.filter(tour=>tour.id !==id);
         this.setState({
             tours : sortedTour
         })
     }  
    render() {
        const {tours}=this.state
        return (
            <div className='tourlist'>
              {tours.map(tour=>{
                  return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
              })}
            </div>
        );
    }
}

export default TourList;