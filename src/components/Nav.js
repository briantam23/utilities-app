import React from 'react';
import style from './nav.less';


const Nav = () => (
    <ul className={ style.nav }>
        <li><a href='#'>Stopwatch</a></li>
        <li><a href='#'>Timer</a></li>
        <li><a href='#'>Calculator</a></li>
        <li><a href='#'>World Clock</a></li>
        <li><a href='#'>Weather</a></li>
        <li><a href='#'>Air Quality Index</a></li>
        <li><a href='#'>Ticketmaster Events</a></li>
    </ul>
)


export default Nav;