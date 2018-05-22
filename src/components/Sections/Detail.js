import React, {Component} from 'react'

import './Detail.scss'

class Detail extends Component {
    render() {
        const content = this.props.content;
        const numberSection = this.props.numberSection;

        return <section className={numberSection%2 ? 'detail odd': 'detail'}>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="cover">
                            <img src={content.cover} alt={content.title}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="content">
                            <h2 className="title">{content.title}</h2>
                            <p className="description">{content.description}</p>
                            <ul>
                                {
                                    content.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Detail;