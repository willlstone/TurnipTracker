import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class BuyPrices extends React.Component {
    // 
    
      render() {
        let data = {
            labels: ['OldZealand', 'SandyNeck', 'Kokomo', 'LANDon', 'GingerIsle'],
            datasets: [
              {
                label: 'Price (lower is better)',
                backgroundColor: '#A5D5A5',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [this.props.Islands.OldZealand.buyPrice,
                    this.props.Islands.SandyNeck.buyPrice,
                    this.props.Islands.Kokomo.buyPrice,
                    this.props.Islands.LANDon.buyPrice,
                    this.props.Islands.GingerIsle.buyPrice,
                ]
              }
            ]
          };
        return (
          <div>
            <HorizontalBar data={data} />
          </div>
        );
      }
};

export default BuyPrices;