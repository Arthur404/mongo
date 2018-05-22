import React, {Component} from 'react'

import './Overview.scss'

const overviewList = [{
    title: 'Real-time Collaboration in AR',
    description: 'Use HoloLens, mobile devices, and web interfaces for AR collaboration in a shared view of a BIM model — on-site and from anywhere in the world. KADO ensures a comfortable experience by synchronizing gestures, gazes, and actions performed while using AR-enabled devices.'
}, {
    title: 'Easy AR App Onboarding',
    description: 'KADO streamlines AR app adoption with clear, concise, and quick onboarding. We have tested the onboarding informational slider with construction industry experts, so that the least tech-savvy professionals can learn how to use an app in under 10 minutes.'
}, {
    title: 'Model Retrieval and Alignment',
    description: 'KADO will help you retrieve and align a BIM model of a site, so you can then ovelay it over the real world environment and work in AR. KADO employs computer vision algorithms to allow for manual alignment of a model to any real world space.'
}, {
    title: 'Shared Repository',
    description: 'Store models in shared space that is available for everyone within organization and seamlessly integrated with popular construction software. KADO integrates with Google Drive, Dropbox, Sharepoint, OneDrive, Box, and Citrix Sharefile.'
}, {
    title: 'Model Stabilization',
    description: 'Accurate positioning of virtual objects to real world objects is one of biggest challenges in Augmented Reality. KADO uses vast amounts of data and advanced algorithms to deliver precise model stabilization.'
}, {
    title: 'Integrations with Your Workflow',
    description: 'KADO allows for seamless integration with widely used construction software — Procore, Viewpoint, Sage, PlanGrid, Trimble Connect, and other.'
}, {
    title: 'File Formats Support',
    description: 'The technology supports all file formats that are common to the construction industry: 3DS, DWF, DWG, FBX, NWC, NWD, RVT, and many other.'
}, {
    title: 'Drag & Drop AR App Maker',
    description: 'The KADO framework includes a streamlined mobile app platform with a drag-and-drop editor that allows you to create an AR app quickly.'
}, {
    title: 'Model Features Extraction',
    description: 'KADO can automatically extract the smallest features of your model, allowing you to view them with HoloLens or an AR app.'
}, {
    title: 'Scalable Cloud Backend & On-Premise Deployment',
    description: 'KADO technology is built to scale — in the cloud, as a part of your infrastructure, or both.'
}, {
    title: 'AR Ruler',
    description: 'Use AR apps and HoloLens to make precise and convenient measurements, compare sizes, and make quicker validations.'
}, {
    title: 'GNSS Integration',
    description: 'KADO integrates with high-precision GNSS devices you use in your construction process.'
}];

class Overview extends Component {
    render() {
        return <section className='overview'>
            <div className='container'>
                <h2 className="title">KADO Components Overview</h2>
                <div className="list">
                    <ul className="row">
                        {
                            overviewList.map((item, i) => (
                                <li className="col-12 col-md-6 col-lg-4" key={i}>
                                    <div className="item">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
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

export default Overview;