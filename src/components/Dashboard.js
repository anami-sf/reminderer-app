import React, { Component } from 'react'

class Dashboard extends Component {

  componentDidMount() {
    this.signIn()
  }

  signIn = () => {
    const URL = 'https://remindererapiv2.herokuapp.com/auth/google_oauth2'
    //const URL = 'http://localhost:3001/dashboard/index'

    fetch( URL, { method: 'get', credentials: 'include'} )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });

}


    // onClick = () => {
    //     const URL = 'https://remindererapiv2.herokuapp.com/dashboard/index'
    //     //const URL = 'http://localhost:3000/dashboard/index'

    //     fetch( URL, { method: 'get' } )
    //       .then((response) => {
    //         console.log(response);
    //         return response.json();
    //       })
    //       .then((myJson) => {
    //         console.log(myJson);
    //       });
  
    // }

    render() {
      return (
        <>
        <h1>Dashboard</h1> 
        </>       
      )
    }
  }

  export default Dashboard; 