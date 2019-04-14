import React, { Fragment } from 'react';


const EventList = ({ events, genre }) => {
    if(genre) {
        events = events.filter(event => event.classifications[0].genre.name === genre)  //filter by genre if genre is selected
    }
    return (
        <div className='cardContainer'>
        {
            events.map(event => event.priceRanges ? (
                <div key={ event.id } className='card'>
                    <img src={ event.images[5].url } alt="Card image cap" />
                    <div>
                        <div>
                            <h3>
                                <strong><a href={ event.url }>{ event.name }</a></strong>
                            </h3>
                        </div>
                        <hr/>
                        <div>
                            <strong>Date: </strong>
                            { event.dates.start.localDate }
                        </div>
                        <hr/>
                        <div>
                            <strong>Price Range: </strong>
                            { '$' + event.priceRanges[0].min.toFixed(2) + ' - $' + event.priceRanges[0].max.toFixed(2) }
                        </div>
                    </div>
                    <div className='text-muted'/>
                    <br/>
                </div>
            ): null)
        }
        </div>
    )
}


export default EventList;