import React, { Component } from 'react'

class Dashboard extends Component {

    onClick = () => {
        const URL = 'https://remindererapiv2.herokuapp.com/dashboard/index'
        //const URL = 'http://localhost:3000/dashboard/index'

        fetch( URL, { method: 'get', credentials: 'include' } )
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
          });
  
    }

    render() {
      return (
        <>
        <h1>Dashboard</h1> 
        {this.onClick()}
        </>       
      )
    }
  }

  export default Dashboard; 