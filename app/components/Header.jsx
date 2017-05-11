import React from 'react';
import {Link} from 'react-router';
import './Header.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };
        this.toggleOpening = this.toggleOpening.bind(this);
    }

    toggleOpening () {
        this.setState({isOpened: !this.state.isOpened});
    }

    static propTypes = {
        menuItems: React.PropTypes.array.isRequired
    }

    render() {
        return (
            <header>
                <button className="navbar-toggler" onClick={this.toggleOpening}>Menu</button>
                {this.state.isOpened &&
                    <ul className="dropdown">
                        {this.props.menuItems.map((item, index) =>
                            <Link key={index} to={item.link}>{item.label}</Link>
                        )}
                    </ul>
                }
            </header>
    );
    }
}


