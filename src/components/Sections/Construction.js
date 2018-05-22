import React, {Component} from 'react'

import './Construction.scss'

import thumbnail_1 from '../../img/ar-img.jpg'
import thumbnail_2 from '../../img/ar-img2.jpg'

const posts = [{
    thumbnail: thumbnail_1,
    title: 'AR Solutions for Construction Are on the Rise — 2017 Industry Report Overview',
    excerpt: 'What the industry is saying about new technology, and how can the construction process move into the Digital era?',
    linkPost: 'https://www.intellectsoft.net/blog/ar-solutions-for-construction',
    tags: ['immersive computing', 'AR']
}, {
    thumbnail: thumbnail_2,
    title: 'Digital Twins of Construction Sites with Advanced Analytics and Autonomous Data Collection',
    excerpt: 'A detailed look at data collection technology and algorithms for digital reconstruction of construction sites.',
    linkPost: 'https://www.intellectsoft.net/blog/advanced-imaging-algorithms-for-digital-twin-reconstruction',
    tags: ['digital twins', 'reconstruction', 'real-time']
}];

class Construction extends Component {
    render() {
        return <section className='construction'>
            <div className='container'>
                <h2 className="title">More About AR in Construction</h2>
                <ul className="row">
                    {
                        posts.map((item, i) => (
                            <li key={i} className="col-12 col-lg-6">
                                <div className="post">
                                    <div className="thumbnail">
                                        <img src={item.thumbnail} alt={item.title}/>
                                    </div>
                                    <div className="content">
                                        <ul className="tags">
                                            {
                                                item.tags.map((tag, j) => (
                                                    <li key={j}>{tag}</li>
                                                ))
                                            }
                                        </ul>
                                        <h4>{item.title}</h4>
                                        <p>{item.excerpt}</p>
                                        <a href={item.linkPost}>read more &rarr;</a>
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

export default Construction;