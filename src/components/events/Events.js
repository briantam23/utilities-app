import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'; 
import EventNav from './eventNav/EventNav';
import EventList from './eventList/EventList';
import { compileGenres } from '../../util/eventsUtil';


class Events extends Component {

    state = {
        events: []
    }

    componentDidMount = () => {
        return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=410&apikey=${process.env.TICKETMASTER_API_KEY}`)   //axios call to Ticketmaster API
            .then(res => res.data._embedded.events)
            .then(events => this.setState({ events }))
    }
    render() {
        const { events } = this.state;
        const genres = compileGenres(events);
        return(
            <Fragment>
                <EventNav genres={ genres }/>
                <Route exact path='/ticketmaster-events' render={ () => <EventList events={ events }/> }/>
                <Route path='/ticketmaster-events/genre/:genreName?' render={({ match }) => <EventList events={ events } genre={ match.params.genreName }/>}/>
            </Fragment>
        )
    }
}

export default Events;