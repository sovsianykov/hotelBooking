import React, { Component } from 'react';
import ItemCity from "./Components/ItemCity";
import ItemHotel from "./Components/ItenHotel";
import ItemPrice from "./Components/ItemPrice";
import Order from "./Components/Order";
import './App.css';

class App extends Component {
  state = {
    cities:  [{ id: 1, one: 'input City', two: 'Helsinki' , three: 'Paris'}],
    hotels: [{ id: 2, one: 'input Hotel', two: 'Golden' , three: 'Premier'}],
    price :  [{ id: 3, one: '$440', two: '500' , three: '100'}],
      orders : [{ id: 4, one: 'best', two: 'awesome' , three: 'very good price'}],
    commonPrice  : 'other value'
  }

  cityChangeHandler = (event) => {
    this.setState({  cities: [{id: 1, one: event.target.value}]

    })
  }
    hotelChangeHandler = (event) => {
        this.setState({  hotels: [{id: 2 , one: event.target.value}]

        })
    }
  handleWrappButton = () => {
    this.setState({ orders: [   {   id: 9,  one: this.state.cities[0].one,
                                                 two: this.state.hotels[0].one,
                                                 three: this.state.price[0].one} ]


    })
  }




  render() {
    return (
      <div className="App">
        <h1>My First React</h1>
          <div className="collection">

               {/*<ItemCity changed ={this.nameChangeHandler} />*/}
              <input type="text" onChange={this.cityChangeHandler}/>
              <ItemCity city = {this.state.cities[0].one} />
              <input type="text" onChange={this.hotelChangeHandler}/>

              <ItemHotel hotel = {this.state.hotels [0].one} />


              {/*<ItemPrice price = {this.state.price[0].three} />*/}

          </div>
           <button className='submit' onClick={this.handleWrappButton} >
             Switch
           </button>


           <Order orders = {this.state.orders[0]} />
      </div>
    );
  }
}

export default App;
