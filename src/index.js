import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import Citizen from './natinality'; // export component from a different file

/**
 * This app demonstrate the main comcepts on React
 */

// eslint-disable-next-line
const title = <h1>React Sample project 01</h1> // JSX example

// eslint-disable-next-line
const transportTypes = (
  <ul>
    <li>Car</li>
    <li>Truck</li>
    <li>Airplane</li>
  </ul>
); // JSX example

// ReactDOM.render([title, transportTypes], document.getElementById('app'));

/**
 * Class component
 */
// eslint-disable-next-line
class Person extends React.Component {

  render() {

    return <h1>Danilo</h1>;

  } // end method render

} // end class Person

// ReactDOM.render(< Person />, document.getElementById('app'));

/**
 * Function component
 */

// eslint-disable-next-line
const Me = () => {

  return <h1>Danilo</h1>

} // end Person function

// ReactDOM.render(< Me />, document.getElementById('app'));

/**
 * Class component with its constructor.
 * Note: The component properties have to be kept on the state object, this is one way to handle component properties,
 * the other way is to handle through "props"
 */
// eslint-disable-next-line
class Brazilian extends React.Component {

  constructor() {

    super(); // executes the parent constructor function and gives access to all its functions
    this.state = { name: "Danilo" }; // One way to handle properties using the state object

  } // end constructor

  render() {

    return <h1>This Brazilian's name is: {this.state.name}</h1>; // return the html with the property name

  } // end method render

} // end class Brazilian

//  ReactDOM.render(< Brazilian />, document.getElementById('app'));

/**
 * Handling properties using props
 */

// eslint-disable-next-line
class Developer extends React.Component {

  render() {

    return <h1>The Dev name is: {this.props.name}</h1> // props works like a function that receives its arguments 

  } // end method render

} // end class Developer

//  ReactDOM.render(< Developer name="Danilo" />, document.getElementById('app'));

/**
 * Conponents inside other components
 */

// eslint-disable-next-line
class FullStackDev extends React.Component {

  render() {

    return (
      <div>
        <h1>The Dev is Brazilian and</h1>
        < Brazilian />
      </div>
    );

  } // end method render

} // end class FullStackDev

// ReactDOM.render(< FullStackDev />, document.getElementById('app'));

// ReactDOM.render(< Citizen />, document.getElementById('app')); // Exporting component from a different file

/**
 * More on props, pass data from one component to another
 * Props are read-only, after asigned can't be changed throuout the process
 */

class Vehicle extends React.Component {

  render() {

    return <h1>This car's color is: {this.props.vehicleColor}</h1>;

  } // end render

} // end Vehicle

// eslint-disable-next-line
class Car extends React.Component {

  /**
   * if the compenent have a constructor, the props should be passed to the constructor and
   * to the React.Component through the super()
   * @param {} props 
   */
  // eslint-disable-next-line
  constructor(props) {

    super(props);

  } // end contructor

  render() {

    const car2color = "Blue";

    return (
      <div>
        <h1>Vehicle 1</h1>
        <Vehicle vehicleColor="Red" />
        <h1>Vehicle 2</h1>
        <Vehicle vehicleColor={car2color} />
      </div>
    );

  } // end render

} // end Car

// ReactDOM.render(<Car />, document.getElementById('app'));

/**
 * The state object is where you store property values for the component, when the state object changes it re-renders on the view.
 */

// eslint-disable-next-line
class House extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      postCode: 68005,
      color: "White"
    };

  } // end constructor

  changeHouseColor = () => {

    this.setState({ color: "Green" });

  } // end changeHouseColor

  render() {

    return (

      <div>
        <h1>My House is postcode is: {this.state.postCode}</h1>
        <span>My house's color is: {this.state.color}</span><br />
        <button type="button" onClick={this.changeHouseColor}>Change Color on state object</button>
      </div>

    );

  } // end render

} // end House

// ReactDOM.render(<House />, document.getElementById('app'));

/**
 * The component Lifecycle have three main phases wich we can manipulate.
 * Mounting, Updating, and Unmounting.
 */

/**
 * Mouting have four built in methods
 * 1 - constructor()
 * 2 - getDrivedStateFromProps
 * 3 - render()
 * 4 - componentDidMount
 * 
 * Note: render() is required the other ones are optional
 *  
 */

// eslint-disable-next-line
class SwimingPool extends React.Component {

  /**
   * The constructor method is called first and it is where we set the initial state(initial values).
   * @param {*} props 
   */
  constructor(props) {

    super(props);
    this.state = {width: "20m"};

  } // end constructor

  /**
   * 
   * This method is called before rendering the elements in the dom,
   * takes state as argument and returns a object with the changes to the state  
   * 
   * @param {*} props 
   * @param {*} state 
   * @returns 
   */
  // static getDerivedStateFromProps(props, state) {

  //   return {width: props.poolWidth};

  // } // getDerivedStateFromProps

  /**
   * componentDidMount() method is called after the component renders.
   */
  componentDidMount() {

    setTimeout(()=> {
       this.setState({width: "50m"});
    }, 1000);

  } // end componentDidMount

  /**
   * 
   * The render() method is required and is responsible to output the html to the DOM. 
   * 
   * @returns
   */
  render() {

    return (
      <h1>The swiming pool width is: {this.state.width}</h1>
    );

  } // end render

} // end SwimingPool

// ReactDOM.render(<SwimingPool poolWidth="40m"/>, document.getElementById('app'));
// ReactDOM.render(<SwimingPool />, document.getElementById('app'));

/**
 * Updating | component gets updated when there is changes on state or props
 * Updating have those built in methods
 * 1 - getDerivedStateFromProps()
 * 2 - shouldComponentUpdate()
 * 3 - render()
 * 4 - getSnapshotBeforeUpdate()
 * 5 - componentDidUpdate()
 */

// eslint-disable-next-line
class MainHeader extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = {title: "Hey there, you are a Developer, aren't you ?"};

  } // end constructor

  /**
   * This is the first method called after a update, if this method is commented here than we see the result of changeHeader method.
   * @param {*} props 
   * @param {*} state 
   * @returns 
   */
  // static getDerivedStateFromProps(props, state) {

  //   return {title: props.mainHeaderTitle};

  // } // getDerivedStateFromProps 

  changeHeader = ()=> {

    this.setState({title: "Yes, I am a Dev..."});

  } // end changeHeader

  /**
   * This method sets if a component should or not be changed, default is true
   * @returns 
   */
  shouldComponentUpdate() {

    //return false; // don't allow the updating 
    return true;

  } // end shouldComponentUpdate

  /**
   * 
   * Gets the props and state before the update
   * 
   * @param {} prevProps 
   * @param {*} prevState 
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {

    document.getElementById("div-before-update").innerHTML =
    "Before the update, the title was : " + prevState.title;
    return null;

  } // end getSnapshotBeforeUpdate

  /**
   * This method needs to be included when use getSnapshotBeforeUpdate method, otherwise a error will occur,
   * this method is called after the component is updated on the DOM.
   */
  componentDidUpdate() {

    document.getElementById("div-updated").innerHTML = "The updated title is: " +  this.state.title;

  } // end componentDidUpdate


  render() {

    return (
       <div>
         <h1>{this.state.title}</h1>
         <button type="button" onClick={this.changeHeader}>Change header title</button>
         <div id="div-before-update"></div>
         <div id="div-updated"></div>
         <div id="div-did-update"></div>
       </div>
    );

  } // end render

} // end MainHeader

// ReactDOM.render(<MainHeader mainHeaderTitle="Developer reading this title" />, document.getElementById('app'));

/**
 * Another phase in component is Cycle is when we romove/Unmounting a component from the DOM
 */

 class MainContainer extends React.Component {
  
  constructor(props) {

    super(props);
    this.state = {show: true};

  } // end constructor

  deleteHeader = () => {

    this.setState({show: false});

  } // deleteHeader

  render() {

    let myheader;

    if (this.state.show) {

      myheader = <ChildComponent />;

    }; // end if

    return (
      <div>
      {myheader}
      <button type="button" onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );

  } // end render
}

class ChildComponent extends React.Component {

  componentWillUnmount() {

    alert("The component named Header will be unmounted/removed.");

  } // end componentWillUnmount

  render() {

    return (
      <h1>Hello World!</h1>
    );

  } // end render

} // end ChildContainer

ReactDOM.render(<MainContainer />, document.getElementById('app'));