import React, { Component, Fragment } from 'react';
import axios from 'axios';
import API_KEY from '../../../apiKey'; 
import { HashRouter as Router, Route } from 'react-router-dom';


class Events extends Component {

    state = {
        events: []
    }

    componentDidMount = () => {
        return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=410&apikey=${API_KEY}`)   //axios call to Ticketmaster API
            .then(res => res.data._embedded.events)
            .then(events => this.setState({ events }))
    }
    render() {
        const { events } = this.state;
        let genres = [];
        events.map(event => {
            let genre = event.classifications[0].genre.name;
            if(genres.indexOf(genre) === -1) {
                genres.push(genre)   //compiling all the different genres
            }
        })
        console.log(events, genres)
        return(
            <Router>
                <Fragment>
                    <h1>Ticketmaster Events</h1>
                </Fragment>
            </Router>
        )
    }
}

export default Events;