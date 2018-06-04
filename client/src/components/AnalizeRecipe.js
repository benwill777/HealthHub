import React, { Component } from 'react';
import styles from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'


const Align = styled.div`
display: flex;
align-content: center;
flex-wrap: wrap;
`
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

    handleSubmit = async (e) => {
        e.preventDefault()
        const transferdata = {
            title: this.state.newRecipe.name,
            ingredients: this.state.newRecipe.ingredients,
        }

        await axios.post('https://api.edamam.com/api/nutrition-details?app_id=81ab8bf4&app_key=abdf19b8e1b63674959facdb2cb894c1', transferdata)
        this.props.toggleShowNewForm()
    }
    render() {
        return (
            <Align><div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name"></label>
                        <input onChange={this.handleChange} placeholder="Name of Recipe:" type="text" name="name" />
                    </div>
                    <br>
                    </br>                    <div>
                        <label htmlFor="ingredients"></label>
                        <textarea onChange={this.handleChange} type="text" placeholder="ingredients..." name="ingredients" rows="12" size="45" />
                    </div>

                    <Link to='/recipe/recipeId'><button>Analyze & Save Recipe</button></Link>

                </form>
            </div></Align>
        );
    }
}

export default AnalizeRecipe;