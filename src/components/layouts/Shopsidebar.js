import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calculator from './Calculator';
import Select2 from 'react-select2-wrapper';
import listing from '../../data/listings.json';
import { locationlist, statuslist, pricerangelist, bedslist, bathroomslist, typelist } from '../../data/select.json';
import { Collapse } from 'react-bootstrap';

class Shopsidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            open2: true,
            open3: true,
        }
    }
    render() {
        const { open } = this.state;
        const { open2 } = this.state;
        const { open3 } = this.state;
        return (
            <div className="sidebar sidebar-left">
                <div className="sidebar-widget">
                    <div className="acr-collapse-trigger acr-custom-chevron-wrapper" onClick={() => this.setState({ open: !open })}>
                        <h5>Filter Listings</h5>
                        <div className="acr-custom-chevron">
                            <span />
                            <span />
                        </div>
                    </div>
                    <Collapse in={this.state.open}>
                        <div className="acr-collapsable">
                            <div className="acr-filter-form">
                                <form>
                                    <div className="acr-custom-select form-group">
                                        <label>Location: </label>
                                        <Select2 data={locationlist} options={{
                                            placeholder: 'Any Location',
                                        }} />
                                    </div>
                                    <div className="acr-custom-select form-group">
                                        <label>Status: </label>
                                        <Select2 data={statuslist} options={{
                                            placeholder: 'Any Status',
                                        }} />
                                    </div>
                                    <div className="acr-custom-select form-group">
                                        <label>Price Range: </label>
                                        <Select2 data={pricerangelist} options={{
                                            placeholder: 'Any Range',
                                        }} />
                                    </div>
                                    <div className="acr-custom-select form-group">
                                        <label>Beds: </label>
                                        <Select2 data={bedslist} options={{
                                            placeholder: 'Any amount',
                                        }} />
                                    </div>
                                    <div className="acr-custom-select form-group">
                                        <label>Bathrooms: </label>
                                        <Select2 data={bathroomslist} options={{
                                            placeholder: 'Any amount',
                                        }} />
                                    </div>
                                    <div className="acr-custom-select form-group">
                                        <label>Type: </label>
                                        <Select2 data={typelist} options={{
                                            placeholder: 'Any Type',
                                        }} />
                                    </div>
                                    <button type="submit" className="btn-block btn-custom" name="button">Apply filters</button>
                                </form>
                            </div>
                        </div>
                    </Collapse>
                </div>
                
            </div>
        );
    }
}

export default Shopsidebar;