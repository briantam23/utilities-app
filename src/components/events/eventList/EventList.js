import React, { Fragment } from 'react';
import style from './eventList.less';


const EventList = ({ events, genre }) => {
    if(genre) {
        events = events.filter(event => event.classifications[0].genre.name === genre);  //filter by genre if genre is selected
    }
    return (
        <div className={ style.cardContainer }>
    {
        events.map(event => event.priceRanges ? (
            <div key={ event.id } className={ style.card }>
                <img src={ event.images[5].url } alt="Card image cap" />
                <div className={ style.cardText }>
                    <Fragment>
                        <h3>
                            <strong>
                                <a href={ event.url } target="_blank" rel="noopener noreferrer">
                                    { event.name }
                                </a>
                            </strong>
                        </h3>
                    </Fragment>
                    <hr/>
                    <Fragment>
                        <strong>Date: </strong>
                        { event.dates.start.localDate }
                    </Fragment>
                    <hr/>
                    <Fragment>
                        <strong>Price Range: </strong>
                        { '$' + event.priceRanges[0].min.toFixed(2) + ' - $' + event.priceRanges[0].max.toFixed(2) }
                    </Fragment>
                </div>
            </div>
        ): null)
    }
        </div>
    )
}


export default EventList;