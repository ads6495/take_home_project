import React from 'react';
import FormField from './FormField';

//Images


import image3 from '../images/photo-1523287562758-66c7fc58967f.jpg'
import image4 from '../images/photo-1547637589-f54c34f5d7a4.jpg'


const sectionStyle = {
    backgroundImage: `url(${image3})`,
    width: '100%',
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',

}

const smallDivStyle = {
    backgroundImage: `url(${image4})`,
    display: 'flex',
    justifyContent: 'center',
    width: '55%',
    height: '50vh',
    marginRight: '2rem',
    marginTop: '2rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
}

const Innovate = () => {
    return (

        <div className="innovate-div-bg">
            <div className="arm-open-div" style={sectionStyle}>
                <h3>Let us help you reach your potential</h3>
                <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>

            </div>
            <section className="main-div-style-innovate">
                <div>
                    <FormField />
                </div>
                <div style={smallDivStyle}>

                </div>
            </section>
        </div>

    )
}

export default Innovate;
