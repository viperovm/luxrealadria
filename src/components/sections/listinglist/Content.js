import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import Sidebar from '../../layouts/Shopsidebar';
import listing from '../../../data/listings.json';
import classNames from 'classnames';
import Loader from '../../layouts/Loader';


const gallerytip = (
    <Tooltip>
        Gallery
    </Tooltip>
);
const gridtip = (
    <Tooltip>
        Grid
    </Tooltip>
);
const listtip = (
    <Tooltip>
        List
    </Tooltip>
);
const maptip = (
    <Tooltip>
        Map
    </Tooltip>
);
const bedstip = (
    <Tooltip>
        Спальни
    </Tooltip>
);
const bathstip = (
    <Tooltip>
        Санузлы
    </Tooltip>
);
const areatip = (
    <Tooltip>
        Площадь
    </Tooltip>
);

class Content extends Component {
    constructor() {
        super();
        this.state = {
            items: listing,
            currentPage: 1,
            itemsPerPage: 5,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

        const renderitems = currentitems.map((item, i) => {
            return (
              <div key={i} className='listing listing-list'>
                <div className='listing-thumbnail'>
                  <Link to='/listing/1'>
                    <img
                      src={process.env.PUBLIC_URL + '/' + item.listimg}
                      alt='listing'
                    />
                  </Link>
                  <div className='listing-badges'>
                    {item.star === true ? (
                      <span className='listing-badge featured'>
                        {' '}
                        <i className='fas fa-star' />{' '}
                      </span>
                    ) : (
                      ''
                    )}
                    {item.sale === true ? (
                      <span className='listing-badge sale'>On Sale</span>
                    ) : (
                      ''
                    )}
                    {item.pending === true ? (
                      <span className='listing-badge pending'> Pending</span>
                    ) : (
                      ''
                    )}
                    {item.rental === true ? (
                      <span className='listing-badge rent'> Rental</span>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className='listing-body'>
                  <h5 className='listing-title'>
                    {' '}
                    <Link to='/listing/1' title={item.title}>
                      {item.title}
                    </Link>{' '}
                  </h5>
                  <span className='listing-price'>
                    €{item.monthlyprice} <span>/month</span>{' '}
                  </span>
                  <p className='listing-text'>{item.text}</p>
                  <div className='acr-listing-icons'>
                    <OverlayTrigger overlay={bedstip}>
                      <div className='acr-listing-icon'>
                        <i className='flaticon-bedroom' />
                        <span className='acr-listing-icon-value'>
                          {item.beds}
                        </span>
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={bathstip}>
                      <div className='acr-listing-icon'>
                        <i className='flaticon-bathroom' />
                        <span className='acr-listing-icon-value'>
                          {item.bathrooms}
                        </span>
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={areatip}>
                      <div className='acr-listing-icon'>
                        <i className='flaticon-ruler' />
                        <span className='acr-listing-icon-value'>
                          {item.area}
                        </span>
                      </div>
                    </OverlayTrigger>
                  </div>
                  <div className='listing-gallery-wrapper'>
                    <Link
                      to='/listing/1'
                      className='btn-custom btn-sm secondary'
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            )
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames("page-item", { "active": activeCondition })}>
                        <Link className="page-link" to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        });
        return (
            <div className="section pagination-content">
                <div className="container">
                    <div className="row">
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                        {/* Sidebar End */}
                        {/* Posts Start */}
                        <div className="col-lg-8">
                            {/* Controls Start */}
                            <div className="acr-global-listing-controls">
                                <div className="acr-listing-active-filters">
                                    <Link to="#">
                                        <div className="close-btn close-dark">
                                            <span />
                                            <span />
                                        </div>
                                        Any Status
                                    </Link>
                                    <Link to="#">
                                        <div className="close-btn close-dark">
                                            <span />
                                            <span />
                                        </div>
                                    West Roxbury, MA
                                    </Link>
                                    <Link to="#">
                                        <div className="close-btn close-dark">
                                            <span />
                                            <span />
                                        </div>
                                        House
                                    </Link>
                                </div>
                            </div>
                            {/* Controls End */}
                            <div className="row">
                                {/* Listing Start */}
                                {this.state.loading === false ? renderitems : <Loader />}
                                {/* Listing End */}
                            </div>
                            {/* Pagination Start */}
                            {pageNumbers.length > 1 ?
                                <ul className="pagination">
                                    {/* Prev */}
                                    {/* to show previous, we need to be on the 2nd or more page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                                        <li className="page-item">
                                            <Link className="page-link" to="#" data-page={this.state.currentPage - 1} onClick={this.handleClick}>
                                                <i className="fas fa-chevron-left" />
                                            </Link>
                                        </li>
                                        : ''}
                                    {/* Prev */}
                                    {renderPagination}
                                    {/* Next */}
                                    {/* to show next, we should not be on the last page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li className="page-item">
                                        <Link className="page-link" to="#" data-page={parseInt(this.state.currentPage + 1)} onClick={this.handleClick}>
                                            <i className="fas fa-chevron-right" />
                                        </Link>
                                    </li>
                                        : ''}
                                    {/* Next */}
                                </ul> : ''}
                            {/* Pagination End */}
                        </div>
                        {/* Posts End */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;