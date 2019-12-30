import React, { Component } from 'react'
import '../App.css'

class Send extends Component {

    onClick = () => {
        const URL = 'https://remindererapiv2.herokuapp.com/notifications/notify'
        
        fetch( URL, { method: 'post' })
            .then((response) => {
                console.log("Message Sent!");
            })
    }

    render() {
      return (
        <button 
            type="button" 
            value="Send" 
            onClick={this.onClick} 
            className="App-header"
        >
            Send
        </button>        
      )
    }
  }

  export default Send; 