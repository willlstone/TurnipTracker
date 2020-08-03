import React from "react";
import { IslandName } from "./utils";
import { Line } from "react-chartjs-2";
import IslandCard from "./IslandCard";
import BuyPrices from "./BuyPrices";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import { dashboardNASDAQChart } from "variables/charts.jsx";
import base from './Base'
import WaveChart from './WaveChart';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Slide from 'react-reveal/Slide';
import { BrowserView, MobileView, isTablet } from "react-device-detect";

class Dashboard extends React.Component {

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
  }
};


componentDidMount() {
  this.ref = base.syncState(IslandName, {
    context: this,
    state: 'Islands'
});

// --- WARNING ---
// only uncomment sunday morning - will reset everything
// Go to views/utils.js --> change the IslandName to a new name
// firebase will use that as the new object db
// then run this.populateData();
// this.populateData();


};

componentDidUpdate() {
  if (this.Islands && Object.keys(this.state.Islands).length === 0){
    this.populateData();
  }
 
};

componentWillUnmount() {
  
  base.removeBinding(this.ref);
};

populateData = () => {
  this.setState({
    Islands: {
      OldZealand: {
        name: 'OldZealand',
        owner: 'Will',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0],
        buyPrice: 0,
      },
      SandyNeck: {
        name: 'SandyNeck',
        owner: 'Christina',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0],
        buyPrice: 0,
      },
      Kokomo: {
        name: 'Kokomo',
        owner: 'Shawn/Abby',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0],
        buyPrice: 0,
      },
      LANDon: {
        name: 'LANDon',
        owner: 'Nick',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0],
        buyPrice: 0,
      },
      GingerIsle: {
        name: 'GingerIsle',
        owner: 'Leslie',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0],
        buyPrice: 0,
      }
  }
})
}

  getArrayTime = () => {
    var d = new Date();
    var numDay = d.getDay(); // 0 - 6
    var numHours = d.getHours(); // 2pm = 14
    let arrayPosition = (numDay - 1) * 2; 
    if (numHours >= 12) { arrayPosition += 1;} 

    // Sunday will have a negative array position 
    // if (arrayPosition < 0) {
    //   arrayPosition = 0;
    // }
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


// END UPDATE METHODS 

  populateIslands = () => {
    let Islands = {...this.state.Islands};
    Islands = {
      OldZealand: {
        name: 'OldZealand',
        owner: 'Will',
        prices: [40,50,139,70,50,30,100,40,60,30,60,100,160]
      },
      SandyNeck: {
        name: 'SandyNeck',
        owner: 'Christina',
        prices: [150,80,60,88,20,50,34,36,89,100,140,180,200]
      },
      Kokomo: {
        name: 'Kokomo',
        owner: 'Shawn/Abby',
        prices: [67,69,79,74,99,150,188,250,190,80,45,60,33]
      },
      LANDon: {
        name: 'LANDon',
        owner: 'Nick',
        prices: [230,210,167,145,101,96,78,75,60,50,45,30,23]
      },
  };
    this.setState({
      Islands: Islands
    });
  };

  dePopulateIslands = () => {
    let Islands = {...this.state.Islands};
    Islands = {
      OldZealand: {
        name: 'OldZealand',
        owner: 'Will',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0]
      },
      SandyNeck: {
        name: 'SandyNeck',
        owner: 'Christina',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0]
      },
      Kokomo: {
        name: 'Kokomo',
        owner: 'Shawn/Abby',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0]
      },
      LANDon: {
        name: 'LANDon',
        owner: 'Nick',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0]
      },
      GingerIsle: {
        name: 'GingerIsle',
        owner: 'Leslie',
        prices: [0,0,0,0,0,0,0,0,0,0,0,0]
      },
  };
    this.setState({
      Islands: Islands
    });
  }

  genOldZealand = () => {
    return (
      {
        borderColor: "#fcc468",
        backgroundColor: "#fcc468",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        data: [...this.state.Islands.OldZealand.prices]
      }
    );
  };

  genSandyNeck = () => {
    return (
      {
        borderColor: "#6bd098",
        backgroundColor: "#6bd098",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        data: [...this.state.Islands.SandyNeck.prices]
      }
    );
  };

  genKokomo = () => {
    return (
      {
        borderColor: "#f17e5d",
        backgroundColor: "#f17e5d",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        data: [...this.state.Islands.Kokomo.prices]
      }
    );
  };

  genGingerIsle = () => {

    return (
      {
        borderColor: "#9F2B67",
        backgroundColor: "#9F2B67",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        data: [...this.state.Islands.GingerIsle.prices]
      }
    )
  };

  genLANDon = () => {
    return(
      {
        borderColor: "#51CACF",
        backgroundColor: "#51CACF",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        data: [...this.state.Islands.LANDon.prices]
      }
    )
  };

    browserLineData = {
      data: canvas => {
        return {
        labels: [
          "Mon AM",
          "Mon PM",
          "Tue AM",
          "Tue PM",
          "Wed AM",
          "Wed PM",
          "Thu AM",
          "Thu PM",
          "Fri AM",
          "Fri PM",
          "Sat AM",
          "Sat PM:"
        ],
        datasets: [
          {
            // data: [...this.state.Islands.OldZealand.prices],
            data: Array.from({ length: 12 }, (v, i) => this.state.Islands.OldZealand.prices[i] || null),
            fill: false,
            borderColor: "#fcc468",
            backgroundColor: "transparent",
            pointBorderColor: "#fcc468",
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8
          },
          {
            // data: [...this.state.Islands.SandyNeck.prices],
            data: Array.from({ length: 12 }, (v, i) => this.state.Islands.SandyNeck.prices[i] || null),

            fill: false,
            borderColor: "#6bd098",
            backgroundColor: "transparent",
            pointBorderColor: "#6bd098",
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8
          },
          {
            // data: [...this.state.Islands.Kokomo.prices],
            data: Array.from({ length: 12 }, (v, i) => this.state.Islands.Kokomo.prices[i] || null),

            fill: false,
            borderColor: "#f17e5d",
            backgroundColor: "transparent",
            pointBorderColor: "#f17e5d",
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8
          },
          {
            // data: [...this.state.Islands.LANDon.prices],
            data: Array.from({ length: 12 }, (v, i) => this.state.Islands.LANDon.prices[i] || null),

            fill: false,
            borderColor: "#51CACF",
            backgroundColor: "transparent",
            pointBorderColor: "#51CACF",
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8
          },
          {
            // data: [...this.state.Islands.GingerIsle.prices],
            data: Array.from({ length: 12 }, (v, i) => this.state.Islands.GingerIsle.prices[i] || null),

            fill: false,
            borderColor: "#9F2B67",
            backgroundColor: "transparent",
            pointBorderColor: "#9F2B67",
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8
          },
        ]
      }
      },};

      mobileLineData = {
        data: canvas => {
          return {
          labels: [
            "Mon AM",
            "Mon PM",
            "Tue AM",
            "Tue PM",
            "Wed AM",
            "Wed PM",
            "Thu AM",
            "Thu PM",
            "Fri AM",
            "Fri PM",
            "Sat AM",
            "Sat PM:"
          ],
          datasets: [
            {
              // data: [...this.state.Islands.OldZealand.prices],
              data: Array.from({ length: 12 }, (v, i) => this.state.Islands.OldZealand.prices[i] || null),
              fill: false,
              borderColor: "#fcc468",
              backgroundColor: "transparent",
              pointBorderColor: "#fcc468",
              pointRadius: 2,
              pointHoverRadius: 2,
              pointBorderWidth: 6
            },
            {
              // data: [...this.state.Islands.SandyNeck.prices],
              data: Array.from({ length: 12 }, (v, i) => this.state.Islands.SandyNeck.prices[i] || null),
  
              fill: false,
              borderColor: "#6bd098",
              backgroundColor: "transparent",
              pointBorderColor: "#6bd098",
              pointRadius: 2,
              pointHoverRadius: 2,
              pointBorderWidth: 6
            },
            {
              // data: [...this.state.Islands.Kokomo.prices],
              data: Array.from({ length: 12 }, (v, i) => this.state.Islands.Kokomo.prices[i] || null),
  
              fill: false,
              borderColor: "#f17e5d",
              backgroundColor: "transparent",
              pointBorderColor: "#f17e5d",
              pointRadius: 2,
              pointHoverRadius: 2,
              pointBorderWidth: 6
            },
            {
              // data: [...this.state.Islands.LANDon.prices],
              data: Array.from({ length: 12 }, (v, i) => this.state.Islands.LANDon.prices[i] || null),
  
              fill: false,
              borderColor: "#51CACF",
              backgroundColor: "transparent",
              pointBorderColor: "#51CACF",
              pointRadius: 2,
              pointHoverRadius: 2,
              pointBorderWidth: 6
            },
            {
              // data: [...this.state.Islands.GingerIsle.prices],
              data: Array.from({ length: 12 }, (v, i) => this.state.Islands.GingerIsle.prices[i] || null),
  
              fill: false,
              borderColor: "#9F2B67",
              backgroundColor: "transparent",
              pointBorderColor: "#9F2B67",
              pointRadius: 2,
              pointHoverRadius: 2,
              pointBorderWidth: 6
            },
          ]
        }
        },};

      // handleClick = (path) => {
      //   this.setState({ redirect: path})
      // }

  render() {
    
    return (
      <>
      {/* <div className="maintenance-overlay">
        <div className="maintenance-text">
          Down For Maintenance Today! 
          Check Back Tomorrow with Turnip Buy Prices!
        </div>
      </div> */}
      {/* <button onClick={this.populateData()}>POPULATE</button> */}
      
        <div className="content content-bg">
        {this.state.Islands.OldZealand && 
           <Slide left >
           <Row>
             <IslandCard
               // onClick={console.log("clicked")}
               Island={this.state.Islands.OldZealand}
               history={this.props.history}
               time={this.getArrayTime()}
               updateIsland={this.updateIsland}
               diva={"icon-big text-center icon-warning"}
               icona={"nc-icon nc-globe text-warning"}
             />
 
               <IslandCard
               Island={this.state.Islands.SandyNeck}
               time={this.getArrayTime()}
               updateIsland={this.updateIsland}
               diva={"icon-big text-center icon-warning"}
               icona={"nc-icon nc-planet text-success"}
             />
 
               <IslandCard
               Island={this.state.Islands.Kokomo}
               time={this.getArrayTime()}
               updateIsland={this.updateIsland}
               diva={"icon-big text-center icon-warning"}
               icona={"nc-icon nc-spaceship text-danger"}
             />
 
               <IslandCard
               Island={this.state.Islands.LANDon}
               time={this.getArrayTime()}
               updateIsland={this.updateIsland}
               diva={"icon-big text-center icon-warning"}
               icona={"nc-icon nc-favourite-28 text-primary"}
             />
 
               <IslandCard
               Island={this.state.Islands.GingerIsle}
               time={this.getArrayTime()}
               updateIsland={this.updateIsland}
               diva={"icon-big text-center icon-warning"}
               icona={"nc-icon nc-bulb-63 icon-purp"}
             /> 
           </Row>
           </Slide>
    }
       

          { this.getArrayTime() < 0 && 
            <Row>
          <Col md="12">
             <Card className="card-chart">
               <CardHeader>
                 <CardTitle tag="h5">Turnip Buy Prices
                </CardTitle>
                  <p className="card-category">Today (Sunday)</p>
               </CardHeader>
               <CardBody>
                  <BuyPrices 
                    Islands={this.state.Islands}
                  />
                </CardBody>
                </Card>
                </Col>
              </Row>
          }
          
             
          { this.getArrayTime() >= 0 &&
            <Slide right>
            <Row>
             
             <Col md="12">
               <Card className="card-chart">
                 <CardHeader>
                   <CardTitle tag="h5">Turnip Prices</CardTitle>
                    <p className="card-category">This Week</p>
                 </CardHeader>
                {!isTablet &&
                   <BrowserView>
                   <CardBody>
                      {this.state.Islands.OldZealand && this.state.Islands.OldZealand.prices.length > 1 &&
                        <Line
                          data={this.browserLineData.data}
                          options={dashboardNASDAQChart.options}
                          width={400}
                          height={100}/>} 
                   </CardBody>
                   </BrowserView>
                }
               

                 <MobileView>
                 <CardBody>
                    {this.state.Islands.OldZealand && this.state.Islands.OldZealand.prices.length > 1 &&
                      <Line
                        data={this.mobileLineData.data}
                        options={dashboardNASDAQChart.options}
                        width={400}
                        height={350}/>} 
                 </CardBody>
                 </MobileView>


                 <CardFooter>
                   <div className="chart-legend">
                   <i className="fa fa-circle icon-yellow" /> OldZealand{" "}
                     <i className="fa fa-circle icon-green" /> Sandy Neck{" "}
                     <i className="fa fa-circle icon-red" /> Kokomo{" "}
                     <i className="fa fa-circle icon-blue" /> LANDon{" "}
                     <i className="fa fa-circle icon-purp" /> GingerIsle{" "}
  
                   </div>
                 </CardFooter>
               </Card>
             </Col>
           </Row>
           </Slide>
          }
          

        { this.getArrayTime() >= 0 && this.state.Islands.OldZealand &&
          <Slide left>
          <WaveChart
            Islands={this.state.Islands}
            OldZealand={this.genOldZealand()}
            SandyNeck={this.genSandyNeck()}
            Kokomo={this.genKokomo()}
            LANDon={this.genLANDon()}
            GingerIsle={this.genGingerIsle()}
            datasets={[this.genOldZealand(),this.genSandyNeck(),this.genLANDon(),this.genGingerIsle(),this.genKokomo()]}
            />
            </Slide>
        }
        

    <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<EditIcon />}
        onClick={ (event) => {this.props.history.push("/tables")}}
      >
        Edit
      </Button>
        </div>
      </>
    );
  }
}

export default Dashboard;
