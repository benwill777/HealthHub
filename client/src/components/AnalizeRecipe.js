import React, { Component } from 'react';
import styles from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class AnalizeRecipe extends Component {
    state = {
        newRecipe: {
            name: '',
            ingredients: ''
        }
    }
    handleChange = (event) => {
        const name = event.target.name
        const newRecipe = { ...this.state.newRecipe }
        newRecipe[name] = event.target.value
        this.setState({ newRecipe })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name"></label>
                        <input onChange={this.handleChange} placeholder="Name of Recipe:" type="text" name="name" />
                    </div>
                    <div>
                        <label htmlFor="ingredients"></label>
                        <textarea onChange={this.handleChange} type="text" placeholder="ingredients..." name="ingredients" rows="15" />
                    </div>

                    <button>Analyze</button>
                </form>
            </div>
        );
    }
}

export default AnalizeRecipe;