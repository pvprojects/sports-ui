import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {

    state = {
        users: [],
        // userInfo:{},
        page: 1,
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/user");

        // const {docs, ... userInfo} = response.data;

        this.setState({ users: response.data });
    };

    prevPage = () => {

    }

    nextPage = () => {

    }

    render() {
        const { users } = this.state;

        return (
            <div className="user-list">
                {users.map(user => (
                    <article key={user.id}>
                        <strong>{user.name}</strong>
                        <p>{user.email}</p>
                        <p>{user.typeUserEnum}</p>
                        <Link to={`/address/${user.addressId}`}>Endereço</Link>
                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        );
    }
}