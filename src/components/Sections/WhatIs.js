import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './WhatIs.scss'

import item_1 from '../../img/icon/kado-feature-icon1.svg'
import item_2 from '../../img/icon/kado-feature-icon2.svg'
import item_3 from '../../img/icon/kado-feature-icon3.svg'

const whatIs = [{
    icon: item_1,
    title: 'Out-of-the-Box Components',
    description: 'Use onboarding, stabilization algorithms, and other features right away.'
}, {
    icon: item_2,
    title: 'Easy to Integrate',
    description: 'KADO quickly integrates with construction management and CAD software.'
}, {
    icon: item_3,
    title: 'Customisable',
    description: 'Develop and integrate of new features and capabilities with KADO'
}];

class WhatIs extends Component {
    render() {
        return <section className='what-is'>
            <div className='container'>
                <h2 className="title">What is KADO</h2>
                <p className='description'>KADO is a technological framework that transforms the construction process
                    with the help of Microsoft HoloLens. KADO allows for better collaboration on every step and
                    decreases the number of errors, allowing you to build better structures faster.</p>
                <div className="items">
                    <ul className="row">
                        {
                            whatIs.map((item, i) => (
                                <li className="col-12 col-lg-4" key={i}>
                                    <div className="item">
                                        <div className="icon">
                                            <img src={item.icon} alt={`Kado feature: ${item.title} Icon`}/>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Link to='/kado-framework-augmented-reality' className='main-btn'>Learn more</Link>
            </div>
        </section>
    }
}

export default WhatIs;