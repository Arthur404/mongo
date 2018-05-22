import React, {Component} from 'react'
import './About.scss'

class About extends Component {
    render() {
        return <section className='about'>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="about-cover">

                        </div>
                    </div>
                    <div className="col-12 col-lg-7 offset-lg-1">
                        <h2 className='title'>About the Lab</h2>
                        <p>A company with a strong focus on emerging technology, Intellectsoft started to explore the
                            potential of Augmented Reality back in 2015. We think that the technology is the next step
                            in the evolution of Architecture, Engineering, and Construction, as well as other
                            industries.</p>
                        <p>This change is challenging, but Intellectsoft is ready to contribute. As a result, our R&D
                            efforts have called for the creation of a separate AR development studio.</p>
                        <p>Having extensive experience in building enterprise solutions, some of Intellectsoft’s best
                            engineers, designers, and analysts are now bringing AR to the biggest industries.</p>
                        <p>Now, discover the first technology by Intellectsoft AR Lab — KADO for Construction.</p>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default About;