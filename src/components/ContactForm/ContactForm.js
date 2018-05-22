import React, { Component } from 'react'

import './ContactForm.scss'

import kadoLogo from '../../img/icon/kado-logo.svg';

const domain = 'traccoon.intellectsoft.net';

class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            last_name: '',
            position: '',
            company: '',
            email: '',
            phone: '',
            description: '',
            nameValid: true,
            lastNameValid: true,
            positionValid: true,
            companyValid: true,
            emailValid: true,
            phoneValid: true,
            descriptionValid: true,
            statusForm: false,
            loading: false
        }
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => {
            this.validateField(name, value)
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState(prevState => ({
            loading: true
        }));

        const err = this.validateForm();
        if (!err) {
            const form = e.target;
            const data = new FormData(form);

            data.set('handler_id', null);

            window.handleFormSubmit(`//${domain}/forms/ar/contacts`, data, {
                type: 'contact-form'
            }).then((response) => {
                if (response.data.status) {
                    this.setState(prevState => ({
                        statusForm: !prevState.statusForm,
                        loading: false
                    }))
                }}
            )
        }
    };

    validateField(fieldName, value) {
        let nameValid = this.state.nameValid;
        let lastNameValid = this.state.lastNameValid;
        let positionValid = this.state.positionValid;
        let companyValid = this.state.companyValid;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;
        let descriptionValid = this.state.descriptionValid;
        switch(fieldName) {
            case 'name':
                nameValid = value.length > 1 && value.length < 255;
                break;
            case 'last_name':
                lastNameValid = value.length > 1 && value.length < 255;
                break;
            case 'position':
                positionValid = value.length > 1 && value.length < 255;
                break;
            case 'company':
                companyValid = value.length > 1 && value.length < 255;
                break;
            case 'email':
                emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
                break;
            case 'phone':
                phoneValid = (/([+]?\d{1,2}[.-\\s]?)?(\d{2,3}[.-]?){2}\d{4}/gm.test(value)) || (value === '');
                break;
            case 'description':
                descriptionValid = (value.length > 1 && value.length < 65535) || (value === '');
                break;
            default:
                break;
        }
        this.setState({
            nameValid: nameValid,
            lastNameValid: lastNameValid,
            positionValid: positionValid,
            companyValid: companyValid,
            emailValid: emailValid,
            phoneValid: phoneValid,
            descriptionValid: descriptionValid
        });
    };

    validateForm = () => {
        let isError = false;
        const errors = {
            nameValid: true,
            lastNameValid: true,
            positionValid: true,
            companyValid: true,
            emailValid: true,
            phoneValid: true,
            descriptionValid: true,
        };

        errors.nameValid = this.state.name.length > 1 && this.state.name.length < 255;
        errors.lastNameValid = this.state.last_name.length > 1 && this.state.last_name.length < 255;
        errors.positionValid = this.state.position.length > 1 && this.state.position.length < 255;
        errors.companyValid = this.state.company.length > 1 && this.state.company.length < 255;
        errors.emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.email);
        errors.phoneValid = (/([+]?\d{1,2}[.-\\s]?)?(\d{2,3}[.-]?){2}\d{4}/gm.test(this.state.phone)) || (this.state.phone === '');
        errors.descriptionValid = (this.state.description.length > 1 && this.state.description.length < 65535) || (this.state.description === '');

        if (!errors.nameValid
            || !errors.lastNameValid
            || !errors.positionValid
            || !errors.companyValid
            || !errors.emailValid
            || !errors.phoneValid
            || !errors.descriptionValid) {
            isError = true
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };


    closeForm = (e) => {
        e.preventDefault();
        this.props.showForm();
    };

    render() {
        return (
            <section className='contact-form'>
                <div className="form-cover">
                    <img src={kadoLogo} alt="Kado Logo"/>
                </div>
                { this.state.statusForm ?
                    <div className="form-container">
                        <div className='success-block'>
                            <h2 className="title">Early Access is Yours!</h2>
                            <p>You’re all signed up for early insider access to KADO. Now you’ll be the first to see all new updates. We will be in touch.</p>
                            <p>Thank You!</p>
                        </div>
                        <a onClick={this.closeForm} className='back-link' href="/">Back to KADO &rarr;</a>
                    </div> :
                    <div className="form-container">
                        <h2 className="title">Experience KADO before it’s available to the public!</h2>
                        <form autoComplete='off' onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className={this.state.nameValid ? '' : 'invalid'} onChange={this.handleChange} type="text" value={this.state.name} name='name' placeholder='First Name *'/>
                                <input className={this.state.lastNameValid ? '' : 'invalid'} onChange={this.handleChange} type="text" value={this.state.last_name} name='last_name' placeholder='Last Name *'/>
                            </div>
                            <div className="form-group">
                                <input className={this.state.positionValid ? '' : 'invalid'} onChange={this.handleChange} type="text" value={this.state.position} name='position' placeholder='Job Title *'/>
                            </div>
                            <div className="form-group">
                                <input className={this.state.companyValid ? '' : 'invalid'} onChange={this.handleChange} type="text" value={this.state.company} name='company' placeholder='Company *'/>
                            </div>
                            <div className="form-group">
                                <input className={this.state.emailValid ? '' : 'invalid'} onChange={this.handleChange} type="email" value={this.state.email} name='email' placeholder='Email *'/>
                            </div>
                            <div className="form-group">
                                <input className={this.state.phoneValid ? '' : 'invalid'} onChange={this.handleChange} type="tel" value={this.state.phone} name='phone' placeholder='Phone (optional)'/>
                            </div>
                            <div className="form-group">
                                <textarea className={this.state.descriptionValid ? '' : 'invalid'} rows="4" onChange={this.handleChange} type="tel" value={this.state.description} name='description' placeholder='Any comments (optional)'/>
                            </div>
                            <button type='submit' className={this.state.loading ? 'main-btn load' : 'main-btn'}>Contact Us<span className="loader"></span></button>
                        </form>
                        <a onClick={this.closeForm} className='back-link' href="/">Back to KADO &rarr;</a>
                    </div>
                }
            </section>
        )
    }
}

export default ContactForm;