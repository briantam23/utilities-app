import React from 'react';
import style from './nav.less';
import { Link } from 'react-router-dom';


const Nav = () => (
    <ul className={ style.nav }>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/stopwatch'>Stopwatch</Link></li>
        <li><Link to='/ticketmaster_events'>Events</Link></li>
        <li><a href='#'>Timer</a></li>
        <li><a href='#'>Calculator</a></li>
        <li><a href='#'>World Clock</a></li>
        <li><a href='#'>Weather</a></li>
        <li><a href='#'>Air Quality</a></li>
    </ul>
)


export default Nav;