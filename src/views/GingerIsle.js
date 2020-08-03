
import React from "react";
import { IslandName } from './utils';

// react plugin used to create charts

import base from './Base'
import PredictionChart from "./PredictionChart";

class GingerIsle extends React.Component {

  state = {
    Islands: {
      OldZealand: {
        name: 'OldZealand',
        owner: 'Will',
        prices: [0],
        buyPrice: 0,
      },
      SandyNeck: {
        name: 'SandyNeck',
        owner: 'Christina',
        prices: [0],
        buyPrice: 0,
      },
      Kokomo: {
        name: 'Kokomo',
        owner: 'Shawn/Abby',
        prices: [0],
        buyPrice: 0,
      },
      LANDon: {
        name: 'LANDon',
        owner: 'Nick',
        prices: [0],
        buyPrice: 0,
      },
      GingerIsle: {
        name: 'GingerIsle',
        owner: 'Leslie',
        prices: [0],
        buyPrice: 0,
      }
  },
  minMaxPattern: [],
  minWeekValue: null,
  avgPattern: [],
};


componentDidMount() {
  this.ref = base.syncState(IslandName, {
    context: this,
    state: 'Islands'
});

    // fetch(`https://api.ac-turnip.com/data/?f=100-90-90`)
    // .then(res => res.json())
    // .then(result => this.setState({ oracle: result }))
    // .then(console.log(this.state.oracle))
};

// componentDidUpdate() {

//   if(this.state.Islands.GingerIsle.prices.length > 0){
    
//   }

//   console.log('ORACLE COMPONENT DID UPDATE')
// };

componentWillUnmount() {
  
  base.removeBinding(this.ref);
};

getArrayTime = () => {
  var d = new Date();
  var numDay = d.getDay(); // 0 - 6
  var numHours = d.getHours(); // 2pm = 14
  let arrayPosition = (numDay - 1) * 2; 
  if (numHours >= 12) { arrayPosition += 1;} 

  if (arrayPosition < 0) {
    arrayPosition = 0;
  }

  return arrayPosition;
}

updateIsland = (island, updatedIsland) => {
  // 1. take a copy of the current state
  const Islands = {...this.state.Islands};
  // 2. update that state
  Islands[island] = updatedIsland;
  // 3. set that to state
  this.setState({ Islands });
}

// callAPI = async() => {
//   await this.generateRequest(this.state.Islands.GingerIsle);
// }

generateRequest = (island) => {
  let urlString = island.prices.reduce((total, price) => {
    if (price === 0) { return total + '-'}
    else {return total + '-' + price}
  }, island.buyPrice);

  urlString = urlString.replace(/-+$/, "");
  const finalString = '/data/?f=' + urlString;
  return finalString;
}

generateArray = (island) => {
  
  let justBuyPrice = [];
      justBuyPrice.push(parseInt(this.state.Islands.GingerIsle.buyPrice));
      var i = 0;
      for (i = 0; i < this.state.Islands.GingerIsle.prices.length; i++){
        if (this.state.Islands.GingerIsle.prices[i] !== 0) {
          justBuyPrice.push(parseInt(this.state.Islands.GingerIsle.prices[i]));
        }
      }
    

      console.log('generate array', justBuyPrice);
      return justBuyPrice;
}


// END UPDATE METHODS 

   render() {
       return (
         <>
         {this.state.Islands.GingerIsle.prices.length > 0 &&
          <PredictionChart
            Islands={this.state.Islands}
            oracle={this.generateArray()}
            Island={this.state.Islands.GingerIsle}
          />
         }
           </>
       )
   }

  
}

export default GingerIsle;
