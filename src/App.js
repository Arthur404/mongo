import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from './pages/Home/Home';
import Framework from './pages/Framework/Framework';
import Demo from './pages/Demo/Demo';
import { Switch, Route } from 'react-router-dom';

import ContactForm from './components/ContactForm/ContactForm';

import './style/main.scss'

const PageFade = (props) => (
    <CSSTransition
        {...props}
        classNames="fadeTranslate"
        timeout={600}
        mountOnEnter={true}
        unmountOnExit={true}
    />
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
        };
    }

    handleShowForm = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }))
    };

	render() {
        const locationKey = this.props.location.pathname;

		return (
			<React.Fragment>
				<div id="page" className={this.state.showForm ? 'active-form' : ''}>
                    <TransitionGroup>
                        <PageFade key={locationKey}>
                            <div className="fix-container">
                                <Switch>
                                    <Route baseHref exact path='/' render={(props) => (
                                        <Home showForm={this.handleShowForm} location={props} />
                                    )}/>
                                    <Route exact path='/kado-framework-augmented-reality' render={(props) => (
                                        <Framework showForm={this.handleShowForm} location={props} />
                                    )}/>
                                    <Route exact path='/kado-demo-augmented-reality' render={(props) => (
                                        <Demo showForm={this.handleShowForm} location={props} />
                                    )}/>
                                </Switch>
                            </div>
                        </PageFade>
                    </TransitionGroup>
                </div>
                <div id="contact-form" className={this.state.showForm ? 'active' : ''}>
                    <ContactForm showForm={this.handleShowForm}/>
                </div>
			</React.Fragment>
		);
	}
}

export default App;
