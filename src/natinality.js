import React from 'react';

/**
 * This file is created to demonstrate that is possible to create components and call them from different files
 */

class Citizen extends React.Component {

    render() {

        return <h1>This is a Citizen of the world !</h1>

    } // end render

} // end Citizen class 


export default Citizen; // make this component exportable