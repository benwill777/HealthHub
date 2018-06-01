import React, { Component } from 'react';

class NewRecipe extends Component {
    state = {
        newRecipe: {
            name: '',
            cooking_directions: '',
            ingredients: ''

        }
    }



    handleChange = (event) => {
        const name = event.target.name
        const newRecipe = { ...this.state.newRecipe }
        newRecipe[name] = event.target.value
        this.setState({ newRecipe })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const transferdata = {
            title: this.state.newRecipe.name,
            description: this.state.newRecipe.cooking_directions,

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleChange} type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="description ">Description: </label>
                        <input onChange={this.handleChange} type="text" name="description" />
                    </div>
                </form>
            </div>
        );
    }
}

export default NewRecipe;