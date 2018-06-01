import React, { Component } from 'react'
import styles from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class HomePage extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        this.getAllUsers();
    }
    getAllUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            console.log(response.data);
            await this.setState({ users: response.data });
            return response.data
        }
        catch (err) {
            console.log(err)
            await this.setState({ err: err.message })
            return err.message
        }
    };
    render() {
        return (



            < div >
                <h4>The Recipe Analizer</h4>
                <button>Add New Recipe</button>
            </div >

        );
    }
}

export default HomePage;