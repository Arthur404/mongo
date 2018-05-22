import React, {Component} from 'react'

import './Architect.scss'

import cover_1 from '../../img/mep-layout.jpg'
import cover_2 from '../../img/interior-design.jpg'
import cover_3 from '../../img/video-collaboration.png'
import cover_4 from '../../img/jobsite-design.jpg'

const architectList = [{
    cover: cover_1,
    title: 'Increasing productivity for  MEP Layout',
    list: ['Model stabilization', 'Model alignment', 'Model features extraction']
}, {
    cover: cover_2,
    title: 'Interior Design review',
    list: ['Integrations with industry software', 'Model alignment', 'Shared repository']
}, {
    cover: cover_3,
    title: 'Remote video collaboration around BIM models',
    list: ['Real-time Collaboration in AR', 'Integration with industry software']
}, {
    cover: cover_4,
    title: 'Jobsite Design Coordination and Changes',
    list: ['Model stabilization', 'Integrations with industry software', 'Model alignment']
}];

class Architect extends Component {
    render() {
        return <section className='architect'>
            <div className='container'>
                <h2 className="title">A Better Tool for Owners, Architects, BIM engineers, and On-site Workers</h2>
                <ul className="row">
                    {
                        architectList.map((item, i) => (
                            <li className="col-12 col-lg-6" key={i}>
                                <div className="item">
                                    <h4>Use Case: {item.title}</h4>
                                    <div className="cover">
                                        <img src={item.cover} alt={item.title}/>
                                    </div>
                                    <div className='features'>
                                        <span>KADO framework features:</span>
                                        <ul>
                                            {
                                                item.list.map((itemList, j) => (
                                                    <li key={j}>{itemList}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    }
}

export default Architect;