import React, { Component } from 'react';
import api from '../../services/api';
import './style.css'

export default class Address extends Component {

    state = {
        address: {},
    };

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api.get(`/address/${id}`);

        this.setState({ address: response.data })
    }

    render() {

        const { address } = this.state;

        return (
            <div className="address-info">
                <p>{address.zipCode}</p>
                <p>{address.street}</p>
                <p>{address.street_number}</p>
                <p>{address.district}</p>
                <p>{address.city}</p>
                <p>{address.state}</p>
                <p>{address.country}</p>
            </div>);
    }
} 