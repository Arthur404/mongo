import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Work.scss'

class Work extends Component {
    render() {
        const workTitle = this.props.head.title;
        const workDescription = this.props.head.description;
        const workItem = this.props.works;

        return <section className='work'>
            <div className='container'>
                <h2 className='title'>{workTitle}</h2>
                {workDescription ? <p className='description'>{workDescription}</p> : workDescription}
                <ul className="work-items">
                    {
                        workItem.map((item, i) => (
                            <li key={i}>
                                <div className="work-icon">
                                    <img src={item.icon} alt={`${item.title} Icon`}/>
                                </div>
                                <div className='work-title'>{item.title}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    }
}

Work.propTypes = {
    works: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            title: PropTypes.string
        })
    ),
    head: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    })
};

export default Work;