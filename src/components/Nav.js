import React from 'react';
import style from './nav.less';

const Nav = () => (
    <ul className={ style.nav }>
        <li><a className={ style.active } href='#'>Stopwatch</a></li>
        <li><a href='#'>Timer</a></li>
    </ul>
)

export default Nav;