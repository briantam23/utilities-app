import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './nav.less';


class Nav extends Component {

    state = {
        open: false
    }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { genres } = this.props;
        const { open } = this.state;
        const { handleClick } = this;

        return (
            <div className={ style.nav }>
                <div className={ style.navTitle }>
                    <span>
                        <Link to={'/ticketmaster_events'}>Ticketmaster Events</Link>
                    </span>
                </div>

                <div className={ style.link }>
                    <span onClick={ handleClick }>Genres</span>
                    
                    <div className={ open ? style.menuOpen : style.menuClosed }>
                        <div className={ style.linkItems }>
                        {   
                            genres.map((genre, idx) => (
                                <div key={ idx }>
                                    <Link to={`/ticketmaster_events/genre/${genre}`}>
                                        { genre }
                                    </Link> 
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Nav;