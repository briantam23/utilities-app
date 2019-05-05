import React from 'react';
import style from './nav.less';
import { Link } from 'react-router-dom';


const Nav = () => (
    <ul className={ style.nav }>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/stopwatch'>Stopwatch</Link></li>
        <li><Link to='/ticketmaster-events'>Events</Link></li>
        <li><Link to='/todos'>Todos</Link></li>
        {/* <li><a href='#'>Air Quality</a></li> */}
        <li><Link to='/forecast'>Weather</Link></li>
        <li><Link to='/my-profile'>Profile</Link></li>
        {/* <li><a href='#'>Timer</a></li>
        <li><a href='#'>Calculator</a></li>
        <li><a href='#'>World Clock</a></li> */}
    </ul>
)


export default Nav;