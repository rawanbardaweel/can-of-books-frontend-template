import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';



 class Profile extends Component {
    render() {
        return (
            <div>
                <h1> This the Profile page </h1> 
                {
                    this.props.auth0.isAuthenticated&&
                    <>
                    <h1>{this.props.auth0.user.name}</h1>
                    <h1>{this.props.auth0.user.email}</h1>
                    <img src={this.props.auth0.user.picture} alt={this.props.auth0.user.name}/>
                    
                    </>

                }
                
            </div>
        )
    }
}

export default withAuth0(Profile);