import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './CTA.scss'

class CTA extends Component {
    render() {
        const content = this.props.content;
        const background = {
            background: `url(${content.cover}) 50% 50% /cover no-repeat, #323232`
        };

        return <section className='cta' style={background}>
            <div className='container'>
                <h2 className="title">{content.title}</h2>
                {content.description ? <p className='description'>{content.description}</p> : content.description}
                <Link target='_blank' to='https://www.microsoft.com/en-us/store/p/kado-mep-layout/9mw1jsxqszcd' className='main-btn'>{content.btnLabel}</Link>
            </div>
        </section>
    }
}

export default CTA;