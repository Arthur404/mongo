import React from 'react';
import {Helmet} from 'react-helmet';

import LocationActions from '../../actions/LocationActions';

import Hero from "../../components/Sections/Hero";
import Work from '../../components/Sections/Work'
import Detail from '../../components/Sections/Detail'
import CTA from '../../components/Sections/CTA'
import Construction from '../../components/Sections/Construction'
import LocateEditor from '../../components/Sections/LocateEditor'
import Footer from '../../components/Footer/Footer';

import './Demo.scss';

import kadoLogo from '../../img/icon/kado-logo.svg'
import backgroundHero from '../../img/bg-hero.jpg'

import itemWork_1 from '../../img/icon/faster-point-layout.svg'
import itemWork_2 from '../../img/icon/number-of-clashes.svg'
import itemWork_3 from '../../img/icon/communication.svg'
import itemWork_4 from '../../img/icon/eliminate-downtimes.svg'

import coverDetail_1 from '../../img/model-stability.png'
import coverDetail_2 from '../../img/between-points.png'
import coverDetail_3 from '../../img/standart-formats.png'

import CTAcover from '../../img/kado_photo2.jpg'

import ogImg from '../../img/is-ar-lab.jpg'

const heroContent = {
    title: 'Build with KADO Framework',
    description: 'Try our closed demo to see how you can increase the precision of model stability and make easier measurements with KADO technology framework.',
    logo: kadoLogo,
    background: backgroundHero
};

const workHead = {
    title: 'Decreasing Clashes & Reworks with AR',
    description: 'KADO creates on-site model visualization with precise and stable coordinate frames directly linked to the BIM models, allowing your construction process to become more precise, efficient, and convenient.'
};

const workItem = [{
    icon: itemWork_1,
    title: '75% faster point layout compared to tape measurement'
}, {
    icon: itemWork_2,
    title: 'Lower number of clashes and reworks'
}, {
    icon: itemWork_3,
    title: 'Clearer communication with stakeholders'
}, {
    icon: itemWork_4,
    title: 'No downtimes due to less errors'
}];

const details = [{
    cover: coverDetail_1,
    title: 'Model stability in large spaces',
    description: 'Increase the precision of model stability by using more tracking algorithms.',
    list: ['Simple model registration', 'No drift during walking around', 'Load multiple models at once']
}, {
    cover: coverDetail_2,
    title: 'Easy measurements between points',
    description: 'Integrate the measurements of model dimensions and points into an AR model viewer.',
    list: ['Point to point measurements', 'Shape parameters', 'Virtual and real world point measurements']
}, {
    cover: coverDetail_3,
    title: 'Standard Industry Formats Support',
    description: 'Take your common project file formats on-site with KADO. The technology supports Revit and AutoCAD file formats.',
    list: ['.RVT', '.DWG', '.DWF']
}];

const CTAcontent = {
    cover: CTAcover,
    title: 'See Augmented Reality in Action',
    description: 'Get access to our closed beta to see how you can decrease clashes and reworks in your construction process.',
    btnLabel: 'Try Demo',
};

const metaTitle = 'AR in Construction | KADO Demo by Intellectsoft';
const metaDescription = 'Try KADO framework demo to see how augmented reality software elevates the construction process. See how our technology increases model stability in large spaces and allows for easier measurements between points. KADO supports all standard industry formats. See AR in construction in action now.';
const OpenGraphImg = '/static/media/is-ar-lab.jpg' || ogImg;
const url = 'https://ar.intellectsoft.net';

class Demo extends React.Component {
    handleLocateAdd = (data) => {
        LocationActions.createLocation(data)
    };

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
                {
                    details.map((item, i) => (
                        <Detail key={i} content={item} numberSection={i+1}/>
                    ))
                }
                <CTA content={CTAcontent}/>
                <Construction/>
                <LocateEditor onLocateAdd={this.handleLocateAdd}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Demo;
