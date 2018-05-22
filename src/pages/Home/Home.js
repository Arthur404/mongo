import React from 'react';
import { Helmet } from 'react-helmet';

import NotesStore from '../../stores/NotesStore'
import NotesActions from '../../actions/NotesActions';

import Hero from "../../components/Sections/Hero";
import About from '../../components/Sections/About'
import WhatIs from '../../components/Sections/WhatIs'
import NoteEditor from '../../components/Sections/NoteEditor'
import Team from '../../components/Sections/Team'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer';

import './Home.scss';
import ogImg from '../../img/is-ar-lab.jpg'

import backgroundHero from '../../img/bg-hero.jpg'
import NotesGrid from "../../components/Sections/NotesGrid";

const heroContent = {
    title: 'AR and Mixed Reality Lab',
    description: 'Increase productivity in Architecture, Engineering, and Construction with comprehensive AR tools for visualization collaboration, and quality control.',
    logo: null,
    background: backgroundHero
};

const metaTitle = 'AR Solutions for Construction | Intellectsoft AR Lab';
const metaDescription = 'Few technologies are as promising for AEC today than augmented reality in construction. A company with a strong focus on emerging tech, Intellectsoft has launched an AR lab that will focus on augmented reality development using the company’s newly created AR technology framework. Learn more now.';
const OpenGraphImg = '/static/media/is-ar-lab.jpg' || ogImg;
const url = 'https://ar.intellectsoft.net';

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = getStateFromFlux();
    }

    componentWillMount() {
        NotesActions.loadNotes();
    }

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange)
    }

    handleNoteAdd = (data) => {
        NotesActions.createNote(data)
    };

    handleNoteDelete = (note) => {
        NotesActions.deleteNote(note.id)
    };

    _onChange = () => {
        this.setState(getStateFromFlux());
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
                <About/>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
                <WhatIs/>
                <Team/>
                <ContactForm/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;