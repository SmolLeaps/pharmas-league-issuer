import React from 'react';
import 'pages/intro/Intro.scss'
import EntireFlow from 'assets/images/icons/user-flow-placeholder.png';
import {routes} from 'constants/routes';

/**
 * Stateless component responsible for rendering a simple SSI introduction screen.
 * */
const IntroPage = () => {
  return (
    <div className='intro page-form page-form--large'>
      <div className='intro__heading-block'>
        <h1 className='intro__heading'>
          Pharmas League
        </h1>
        <h5 className='intro__subheading'>Greater Southeast Asia's Trusted Drug Marketplace.</h5>
      </div>
      <div className='intro__text-block'>
        <h4>Reseller - Getting your First Verifiable Credential</h4>
        <p></p>
      </div>
      <div className='intro__example'>
        <img className='flow-size' src={EntireFlow} alt='entire-flow'/>
      </div>
      <div className='intro__roles-description'>
        <div className='intro__roles-description-role'>
          <h3>Issuer</h3>
          <p>TODO</p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Holder</h3>
          <p>TODO</p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Verifier</h3>
          <p>TODO</p>
        </div>
      </div>

      <p>Ready to list your drug on Pharma's League? Register <a href={routes.APPLICANT_LOGIN} rel='noreferrer'>here</a></p>
    </div>
  )
}

export default IntroPage
