import React, { Component } from 'react';
import Homepage from './HomePage'
import axios from 'axios'
class SingleUser extends Component {
    state = {
        recipes: [],
        user: {}
    }

    componentDidMount() {
        this.getSpecificUser();
    }

    getSpecificUser = async () => {
        const user_id = this.props.match.params.id
        try {
            const response = await axios.get(`/api/users/${user_id}`)
            console.log('from the specific user: ', response.data);
            await this.setState({ users: response.data });
        }
        catch (err) {
            console.log(err)
            await this.setState({ err: err.message })
            //return err.message
        }
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default SingleUser;