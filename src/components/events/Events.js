import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'; 
import Nav from './Nav';


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
                    <Nav genres={ genres }/>
                </Fragment>
            </Router>
        )
    }
}

export default Events;