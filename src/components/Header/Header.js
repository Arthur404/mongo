import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Header.scss'

import logo from '../../img/ar-lab-logo.svg'

const sortDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9">
        <path fill="#FFF" d="M1.045 0h9.91a1 1 0 0 1 .79 1.614L6.789 7.985a1 1 0 0 1-1.578 0L.255 1.614A1 1 0 0 1 1.045 0z"/>
    </svg>
);

const menu = [{
    label: 'Home',
    url: '/',
    subUrl: []
}, {
    label: 'Kado',
    url: '/kado',
    subUrl: [{
        label: 'KADO framework',
        url: '/kado-framework-augmented-reality',
        subUrl: []
    }, {
        label: 'KADO demo',
        url: '/kado-demo-augmented-reality',
        subUrl: []
    }, {
        label: 'AR in construction ',
        url: 'https://www.intellectsoft.net/platforms/ar-construction',
        subUrl: []
    }]
}, {
    label: 'Blog',
    url: 'https://www.intellectsoft.net/blog/augmented-reality',
    subUrl: []
}];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: {},
            activeLink: false
        };
    }

    componentDidMount() {
        if (this.props.location.location.pathname === menu[1].subUrl[0].url || this.props.location.location.pathname === menu[1].subUrl[1].url) {
            this.setState(prevState => ({
                activeLink: true
            }))
        }
    };

    toggleMenu = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    };

    handleShowForm = (e) => {
        e.preventDefault();
        this.props.showForm();
    };

    handlerClick = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <header className='main-header'>
                <h1 className='logo'>
                    <Link to="/">
                        <img src={logo} alt="AR Lab logo"/>
                        AR Lab
                    </Link>
                </h1>
                <button onClick={this.toggleMenu} className='nav-btn'><div className={this.state.isToggleOn ? 'inner-btn' : 'inner-btn active'}></div></button>
                <nav className={this.state.isToggleOn ? 'nav-menu' : 'nav-menu active'}>
                    <ul>
                        {
                            menu.map((item, i) => {
                                if (item.url.indexOf("http://") === 0 || item.url.indexOf("https://") === 0) {
                                    return (<li key={i}><a href={item.url}>{item.label}</a></li>)
                                } else if (item.subUrl.length > 0) {
                                    return (
                                        <li className='menu-parent' key={i}>
                                            <a onClick={this.handlerClick} className={this.state.activeLink ? 'active' : ''} href='/'>
                                                {item.label}
                                                {sortDown}
                                            </a>
                                            <ul>
                                                {
                                                    item.subUrl.map((subItem, j) => {
                                                        if (subItem.url.indexOf("http://") === 0 || subItem.url.indexOf("https://") === 0) {
                                                            return (<li key={j}><a href={subItem.url}>{subItem.label}</a></li>)
                                                        } else {
                                                            return <li key={j}><NavLink activeClassName="active" to={subItem.url}>{subItem.label}</NavLink></li>
                                                        }
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                } else  {
                                    return (<li key={i}><NavLink exact activeClassName="active" to={item.url}>{item.label}</NavLink></li>)
                                }
                            })
                        }
                        <li><a onClick={this.handleShowForm} href='/' className='contact-btn'>Contact us</a></li>
                        <li><Link target='_blank' to='https://www.microsoft.com/en-us/store/p/kado-mep-layout/9mw1jsxqszcd' className='demo-btn'>Try Demo</Link></li>
                    </ul>
                </nav>
            </header>
            )

    }
}

export default Header;