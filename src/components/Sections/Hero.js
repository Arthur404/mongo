import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import smoothscroll from 'smoothscroll-polyfill';

import './Hero.scss'

import arrow from '../../img/icon/sort-down.svg'

class Hero extends Component {
    scrollToElement = () => {
        const heightHero = document.querySelector('.hero').offsetHeight;

        smoothscroll.polyfill();

        window.scroll({
            top: heightHero,
            left: 0,
            behavior: 'smooth'
        });
    };

    render() {
        const content = this.props.content;
        const showForm = this.props.showForm;
        const background = {
            background: `url(${content.background}) 50% 50% /cover no-repeat, #323232`
        };

        const logo = content.logo ? <img className='kado-logo' src={content.logo} alt={`${content.title} Logo`}/> : null;
        const title = content.title ? <h1>{content.title}</h1> : null;
        const description = content.description ? <p>{content.description}</p> : null;

        return (
            <section className='hero' style={background}>
                <div className='container'>
                    <Header showForm={showForm} location={this.props.location}/>
                    <div className="welcome">
                        {logo}
                        {title}
                        {description}
                    </div>
                    <button onClick={this.scrollToElement} className='scroll-down'>
                        <img src={arrow} alt="scroll"/>
                    </button>
                </div>
            </section>
        )
    }
}

Hero.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    })
};

export default Hero;