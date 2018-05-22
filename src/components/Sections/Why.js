import React, {Component} from 'react'

import './Why.scss'

import item_1 from '../../img/icon/kado-feature-icon1.svg'
import item_2 from '../../img/icon/kado-feature-icon2.svg'
import item_3 from '../../img/icon/kado-feature-icon3.svg'

const frameworks = [{
    icon: item_1,
    title: 'Out-of-the-Box',
}, {
    icon: item_2,
    title: 'Easy to integrate',
}, {
    icon: item_3,
    title: 'Customisable',
}];

class Why extends Component {
    render() {
        return <section className='why'>
            <div className='container'>
                <h2 className="title">Why KADO Framework</h2>
                <ul className="frameworks">
                    {
                        frameworks.map((item, i) => (
                            <React.Fragment key={i}>
                                <li className="framework-item">
                                    <div className="icon">
                                        <img src={item.icon} alt={`${item.title} Icon`}/>
                                    </div>
                                    <div className='framework-title'>{item.title}</div>
                                </li>
                                <li className='line'>

                                </li>
                            </React.Fragment>
                        ))
                    }
                </ul>
            </div>
        </section>
    }
}

export default Why;