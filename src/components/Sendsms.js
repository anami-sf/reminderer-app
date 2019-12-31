import React, { Component } from 'react'
import '../App.css'

class Send extends Component {

    onClick = () => {
        //const URL = 'https://remindererapiv2.herokuapp.com/notifications/notify'
        const URL = 'http://localhost:3000/notifications/notify'
        
        fetch( URL, { method: 'post' })
            .then((response) => {
                console.log(response);
            })
    }

    render() {
      return (
        <button 
            type="button" 
            value="Send" 
            onClick={this.onClick} 
        >
            Send
        </button>        
      )
    }
  }

  export default Send; 