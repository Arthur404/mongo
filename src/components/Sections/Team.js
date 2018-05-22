import React, {Component} from 'react'

import './Team.scss'

import photo_1 from '../../img/ar-lab-head.jpg'
import photo_2 from '../../img/ar-lab-tech-lead.jpg'
import photo_3 from '../../img/ar-lab-experience-designer-head.png'
import photo_4 from '../../img/ar-lab-comp-vision-developer.png'

const teamList = [{
    photo: photo_1,
    name: 'Pavlo Bashmakov',
    occupation: 'Head of AR Lab'
}, {
    photo: photo_2,
    name: 'Alexey Zhezherov',
    occupation: 'AR Tech Lead'
}, {
    photo: photo_3,
    name: 'Anna Iurchenko',
    occupation: 'Head AR Experience Designer'
}, {
    photo: photo_4,
    name: 'Aleksey Yanochkin',
    occupation: 'Computer Vision Developer'
}];

class Team extends Component {
    render() {
        return <section className='team'>
            <div className='container'>
                <h2 className="title">Team</h2>
                <div className="items">
                    <ul className="row">
                        {
                            teamList.map((item, i) => (
                                <li className="col-12 col-md-6 col-lg-3" key={i}>
                                    <div className="person">
                                        <div className="photo">
                                            <img src={item.photo} alt={`AR Lab ${item.occupation}`}/>
                                        </div>
                                        <div className='name'>{item.name}</div>
                                        <p>{item.occupation}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    }
}

export default Team;