import React, {Component} from 'react'

import './Social.scss'

const ln = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <path fill="#A7A7A7"
              d="M2.583.423a2.579 2.579 0 1 1 0 5.16 2.58 2.58 0 1 1 0-5.16zm-2.23 21.43V7.538H4.81v14.315H.354zM7.603 7.538h4.267v1.958h.06c.595-1.127 2.046-2.314 4.213-2.314 4.506 0 5.337 2.964 5.337 6.82v7.851h-4.447v-6.96c0-1.66-.033-3.797-2.312-3.797-2.318 0-2.67 1.808-2.67 3.675v7.082H7.602V7.538z"
              opacity=".596"/>
    </svg>
);
const fb = (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22">
        <path fill="#A7A7A7"
              d="M8.766 3.58c.651-.023 1.302-.005 1.956-.007h.268V.155C10.642.12 10.278.069 9.914.052 9.246.023 8.578-.011 7.907.004c-1.02.022-1.987.273-2.83.882-.97.702-1.501 1.69-1.703 2.853-.084.481-.106.978-.118 1.467-.02.768-.005 1.534-.003 2.301v.289H.009v3.816h3.225v9.596h3.94v-9.58h3.214c.165-1.27.325-2.527.494-3.835-.259 0-.49-.002-.723 0-.913.003-3.01 0-3.01 0s.008-1.893.03-2.714c.032-1.125.694-1.468 1.587-1.5"
              opacity=".596"/>
    </svg>
);
const tw = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20">
        <path fill="#A7A7A7"
              d="M7.262 15.431c-2.557-.09-4.155-1.947-4.58-3.456.712.138 1.413.11 2.11-.063.019-.003.037-.016.072-.033-1.386-.324-2.453-1.076-3.197-2.283a4.897 4.897 0 0 1-.72-2.65 4.82 4.82 0 0 0 2.189.605C2.096 6.792 1.397 5.8 1.11 4.53c-.284-1.266-.1-2.471.528-3.606C4.305 4.1 7.677 5.84 11.79 6.127c-.03-.197-.06-.37-.081-.545-.135-1.17.095-2.265.72-3.256.782-1.242 1.9-2.016 3.337-2.251 1.655-.273 3.099.202 4.307 1.389.082.079.15.105.263.079A9.863 9.863 0 0 0 23.197.428c.02-.01.042-.024.065-.033.004-.003.011-.003.031-.003-.39 1.158-1.098 2.05-2.106 2.71a9.316 9.316 0 0 0 2.74-.746c.007.009.015.014.02.022-.188.248-.37.504-.564.748a9.699 9.699 0 0 1-1.79 1.719c-.057.042-.084.083-.082.156.027.74-.002 1.478-.091 2.211a14.824 14.824 0 0 1-1.267 4.433 14.32 14.32 0 0 1-2.66 3.926c-1.874 1.96-4.134 3.224-6.763 3.812-.901.201-1.817.304-2.74.33-2.839.085-5.46-.63-7.875-2.137-.03-.019-.06-.04-.114-.078 1.717.188 3.35-.035 4.921-.687a9.695 9.695 0 0 0 2.34-1.38"
              opacity=".596"/>
    </svg>
);
const fl = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12">
        <path className='dribble-red'
              fill="#A7A7A7"
              d="M19.3 4.9C19.3 7.2 17.4 9.1 15.1 9.1 12.7 9.1 10.9 7.2 10.9 4.9 10.9 2.6 12.7 0.7 15.1 0.7 17.4 0.7 19.3 2.6 19.3 4.9"
              opacity=".596"/>
        <path className='dribble-blue'
              fill="#A7A7A7"
              d="M4.2 9.1C1.9 9.1 0 7.2 0 4.9 0 2.6 1.9 0.7 4.2 0.7 6.5 0.7 8.4 2.6 8.4 4.9 8.4 7.2 6.5 9.1 4.2 9.1Z"
              opacity=".596"/>
    </svg>

);
const dr = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#A7A7A7"
              d="M17.32 19.809a34.524 34.524 0 0 0-1.677-6.747c1.797-.27 3.723-.182 5.768.257a9.734 9.734 0 0 1-4.09 6.49m-11.28-.174a15.016 15.016 0 0 1 3.353-3.814 12.982 12.982 0 0 1 4.214-2.286 32.314 32.314 0 0 1 1.757 7.32 9.679 9.679 0 0 1-3.562.675 9.682 9.682 0 0 1-5.761-1.895m-3.966-7.832c0-.114.002-.226.007-.335a35.206 35.206 0 0 0 6.618-.453 26.114 26.114 0 0 0 3.472-.816c.227.455.448.927.664 1.418a15.062 15.062 0 0 0-4.744 2.587A17.088 17.088 0 0 0 4.49 18.21a9.693 9.693 0 0 1-2.414-6.407m5.359-8.689c.734.81 2.23 2.591 3.741 5.215-3.426.992-6.955 1.096-8.798 1.066a9.757 9.757 0 0 1 5.057-6.281m10.523 1.162c-1.25 1.523-2.947 2.601-4.784 3.36a37.149 37.149 0 0 0-.607-1.04 32.97 32.97 0 0 0-3.042-4.25 9.719 9.719 0 0 1 2.278-.271 9.68 9.68 0 0 1 6.155 2.2m1.463 1.486a9.682 9.682 0 0 1 2.092 5.46c-2.516-.497-4.727-.469-6.64-.122a33.022 33.022 0 0 0-.739-1.622c2.191-.937 3.971-2.184 5.287-3.716M11.803 0C5.296 0 0 5.295 0 11.803c0 6.507 5.295 11.802 11.802 11.802 6.509 0 11.804-5.295 11.804-11.802C23.607 5.295 18.312 0 11.803 0"
              opacity=".596"/>
    </svg>
);

const social = [{
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/intellectsoft/',
    icon: ln
}, {
    name: 'facebook',
    link: 'https://www.facebook.com/Intellectsoft/',
    icon: fb
}, {
    name: 'twitter',
    link: 'https://twitter.com/Intellectsoft',
    icon: tw
}, {
    name: 'flickr',
    link: 'https://www.flickr.com/photos/intellectsoft/',
    icon: fl
}, {
    name: 'dribbble',
    link: 'https://dribbble.com/intellectsoft',
    icon: dr
}];

class Social extends Component {
    render() {
        return (
            <ul className="social">
                {
                    social.map((item, i) => (
                        <li className={item.name} key={i}>
                            <a rel='nofollow' target='_blank' href={item.link}>
                                {item.icon}
                            </a>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default Social;