import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class Footercontent extends Component {
    render() {
        return (
          <Fragment>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center'>
                  <div className='footer-logo text-white mr-5'>
                    <Logo className='text-white' />
                  </div>
                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 footer-widget'>
                  <ul className='social-media'>
                    <li>
                      {' '}
                      <Link to='#'>
                        {' '}
                        <i className='fab fa-facebook-f' />{' '}
                      </Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='#'>
                        {' '}
                        <i className='fas fa-envelope' />{' '}
                      </Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='#'>
                        {' '}
                        <i className='fas fa-phone' />{' '}
                      </Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='#'>
                        {' '}
                        <i className='fab fa-linkedin-in' />{' '}
                      </Link>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='footer-bottom'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-7'>
                    <p className='m-0'>
                      ?? 2021 - <Link to='/'>LuxRealAdria</Link>
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </Fragment>
        )
    }
}

export default Footercontent;