import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './navBar.less';


class NavBar extends Component {

    state = {
        listVisible: false
    }

    show = () => {
        this.setState({ listVisible: true });
        document.addEventListener("click", this.hide);
    }

    hide = () => {
        this.setState({ listVisible: false });
        document.removeEventListener("click", this.hide);
    }

    render() {
        const { genres } = this.props;
        return (
            <div className={ style.dropdownContainer + (this.state.listVisible ? " show" : "")}>
                <div className={ style.dropdownDisplay + (this.state.listVisible ? " clicked" : "")} onClick={this.show}>
                    <span>Genres</span>
                </div>
                <div className={ style.dropdownList }>
                    <div>
                        {   
                            genres.map((genre, idx) => (
                                <div key={ idx }>
                                    <span /* style={{ color: item.hex }} */>
                                        <Link to={`/ticketmaster_events/genre/${genre}`}>
                                            { genre }
                                        </Link> 
                                    </span>
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