import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'

class Dashboard extends Component {

  //const URL = 'https://remindererapiv2.herokuapp.com/auth/google_oauth2'

  // componentDidMount() {
  //   this.signIn()
  // }

    onClick = () => {
      const URL = 'http://localhost:3000/dashboard/index'
      axios.get(URL).then(response => response.data)
      .then((data) => {
        console.log(data)
       })
    }
    

    singIn = () => {
        //const URL = 'https://remindererapiv2.herokuapp.com/dashboard/index'
        const URL = 'http://localhost:3000/auth/google_oauth2'

        axios.get(URL).then(response => response.data)
        .then((data) => {
          console.log(data)
         })
  
    }

    render() {
      return (
        <>
        <h1>Dashboard</h1> 
        <a
          className="App-link"
          href="http://localhost:3000/auth/google_oauth2"
          target="_blank"
          rel="noopener noreferrer"
        >
          LogIn
        </a>
        <button 
            type="button" 
            value="Dashboard" 
            onClick={this.onClick} 
        >
            Go to Dashboard
        </button>  
        <button 
            type="button" 
            value="Dashboard" 
            onClick={this.singIn} 
        >
            Google Oauth2
        </button>    

        </>       
      )
    }
  }

  export default Dashboard; 