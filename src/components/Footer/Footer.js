import React, { Component } from 'react'
import Social from '../Social/Social'
import LocationActions from '../../actions/LocationActions';
import LocationsStore from '../../stores/LocationsStore'

import './Footer.scss'

const privacyPolicy = 'https://www.intellectsoft.net/privacy-policy';

function getStateFromFluxe() {
    return {
        isLoading: LocationsStore.isLoading(),
        locations: LocationsStore.getLocation()
    }
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = getStateFromFluxe();
    }

    componentWillMount() {
        LocationActions.loadLocations();
    }

    componentDidMount() {
        LocationsStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        LocationsStore.removeChangeListener(this._onChange)
    }

    _onChange = () => {
        this.setState(getStateFromFluxe());
    };

    render() {
        const locations = this.state.locations;

        return <footer className='main-footer'>
            <div className='container'>
                <ul className="row">
                    {
                        locations.map((item, i) => (
                            <li className="col-12 col-sm-6 col-md-3" key={i}>
                                <div className="location">
                                    <div className='city'>{item.city}</div>
                                    <address>{item.address}</address>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="bottom-footer">
                    <span className="copy">&copy; 2018 Intellectsoft
                        <a target="_blank" href={privacyPolicy} rel="nofollow">Privacy Policy</a>
                    </span>
                    <Social/>
                </div>
            </div>
        </footer>
    }
}

export default Footer;