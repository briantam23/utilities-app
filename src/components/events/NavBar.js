import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './navBar.less';


class NavBar extends Component {

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
            <div className={ style.link }>
                <span onClick={ handleClick }>Genres</span>
                <div className={ style.dropdownList }>
                    <div className={ open ? 'style.open' : 'style.closed'}>
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
        )
    }
}


export default NavBar;