import React from 'react';
import style from './nav.less';
import { Link } from 'react-router-dom';


const Nav = () => (
    <div className={ style.header }>
        {/* <a href="" className={ style.logo }>Nav</a> */}
        <input className={ style.menuBtn} type="checkbox" id="menu-btn" />
        <label className={ style.menuIcon} htmlFor="menu-btn"><span className={ style.navicon }></span></label>
        <ul className={ style.menu }>
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
    </div>
)


export default Nav;