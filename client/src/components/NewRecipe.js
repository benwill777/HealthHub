import React, { Component } from 'react';

class NewRecipe extends Component {
    state = {
        newRecipe: {
            name: '',
            cooking_directions: '',
            ingredients: ''

        }
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
        name: this.state.newRecipe.name,
        ingredients: this.state.newRecipe.ingredients,



    }
    fetchData = async (userId) => {
        try {
            const recipeResponse = await axios.get(`/api/users/${userId}`)
            const ingredientResponse = await axios.get(`/api/users/${ingredientId}/recipes`)

            await axios.post(`/api/users/${this.props.userId}/recipes/`, transferdata);
            this.props.fetchData(this.props.userId)
            this.props.toggleShowNewForm()
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
                )
            }



            export default NewRecipe;