import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from "../../components/Sections/Hero";
import Work from '../../components/Sections/Work'
import Overview from '../../components/Sections/Overview'
import CTA from '../../components/Sections/CTA'
import Architect from '../../components/Sections/Architect'
import Why from '../../components/Sections/Why'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer';

import './Framework.scss';

import kadoLogo from '../../img/icon/kado-logo.svg'
import backgroundHero from '../../img/main-photo.jpg'

import item_1 from '../../img/icon/model-stabilization.svg'
import item_2 from '../../img/icon/on-site-cloud-hybrid.svg'
import item_3 from '../../img/icon/model-retrieval.svg'
import item_4 from '../../img/icon/file-format-support.svg'
import item_5 from '../../img/icon/integrates.svg'

import CTAcover from '../../img/photo-kado.jpg'

import ogImg from '../../img/is-ar-lab.jpg'

const heroContent = {
    title: 'Kado Technology Framework',
    description: 'Use the paired power of KADO technology and Microsoft HoloLens in your construction process to decrease reworks by 70%, improve collaboration on all levels, and build better structures faster.',
    logo: kadoLogo,
    background: backgroundHero
};

const workHead = {
    title: 'All Your Business Needs — One Integrated Framework',
    description: null
};

const workItem = [{
    icon: item_1,
    title: 'BIM Model Stabilization'
}, {
    icon: item_2,
    title: 'On-site, Cloud, Hybrid'
}, {
    icon: item_3,
    title: 'BIM Model Retrieval and Alignment'
}, {
    icon: item_4,
    title: 'Industry File Format Support'
}, {
    icon: item_5,
    title: 'Integrates with Industry Software'
}];

const CTAcontent = {
    cover: CTAcover,
    title: 'Rid your construction process of reworks with KADO technology.',
    description: null,
    btnLabel: 'Try the demo now',
};

const metaTitle = 'AR in Construction | KADO Technology Framework';
const metaDescription = 'KADO technology framework is Intellectsoft’s augmented reality software for AEC companies. From BIM model retrievement to AR teleoperation and ruler, KADO is the essential AR in construction solution. Learn how you can reach higher precision and efficiency levels in a more comfortable workflow.';
const OpenGraphImg = '/static/media/is-ar-lab.jpg' || ogImg;
const url = 'https://ar.intellectsoft.net';

class Framework extends React.Component {
    render() {
        const showForm = this.props.showForm;

        return (
            <React.Fragment>
                <Helmet>
                    <title>{metaTitle}</title>
                    <link rel="canonical" href={url} />
                    <meta name="description" content={metaDescription} />
                    <meta property="og:title" content={metaTitle} />
                    <meta property="og:description" content={metaDescription} />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="AR Lab" />
                    <meta property="og:url" content={url} />
                    <meta property="og:image" content={url + OpenGraphImg} />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:description" content={metaDescription} />
                    <meta property="twitter:title" content={metaTitle} />
                    <meta property="twitter:image" content={url + OpenGraphImg} />
                    <meta property="fb:app_id" content="xxx" />
                    ]}
                </Helmet>
                <Hero content={heroContent} showForm={showForm} location={this.props.location}/>
                <Work works={workItem} head={workHead}/>
                <Overview/>
                <CTA content={CTAcontent}/>
                <Architect/>
                <Why/>
                <ContactForm/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Framework;
