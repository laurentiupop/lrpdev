//  write a program to have a small website for present cars in javascript 
import React from 'react';
import { render } from 'react-dom';

class CarList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { name: 'Honda Civic', year: 2020 },
        { name: 'Toyota Corolla', year: 2019 },
        { name: 'Ford Mustang', year: 2018 }
      ] 
    };
  }

  render() { 
    return ( 
      <div> 
        <h2>Cars</h2> 

        <ul> 
          {this.state.cars.map((car, index) => ( 
            <li key={index}>{car.name} ({car.year})</li> 
          ))}  

        </ul>  

      </div>  

    );  

  }  

 }  

 render(<CarList />, document.getElementById('root'));