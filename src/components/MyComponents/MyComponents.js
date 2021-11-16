import React from 'react';

class MyComponent extends  React.Component{

    state ={
        text: 'Dominika',
    }

    //funkcja wyswuetla tekst w input
    // handleChange = () => console.log('change');
    handleChange = (event) => {
        this.setState({text: event.target.value.toUpperCase()});
    }

    render(){
        return(
            <>
                <input placeholder="tekst" onChange={this.handleChange} value={this.state.text}/>
                <h1>{this.state.text}</h1>
            </>
        )  
    }
}

export default MyComponent;