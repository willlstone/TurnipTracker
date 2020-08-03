import React from "react";
import { Line } from "react-chartjs-2";

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
  } from "reactstrap";

  import { calculate } from "./patterns.js"
  import { BrowserView, MobileView, isTablet } from "react-device-detect";


class PredictionChart extends React.Component {

    state = {
        oracle: {},
        minData: [],
        maxData: [],
    };

    componentDidMount() {
      let { patterns, avgPattern, minMaxPattern, minWeekValue } = calculate(this.props.oracle);

    this.setState({
      avgPattern,
      minMaxPattern,
      minWeekValue
    });
    }

    componentDidUpdate() {
      let { avgPattern, minMaxPattern, minWeekValue } = calculate(this.props.oracle);

      console.log('avgPattern: ', avgPattern);
      console.log('avgPatter on STATE: ', this.state.avgPattern);
      if (avgPattern[0] !== this.state.avgPattern[0]) {
        console.log('re-rendering in componentDidUpdate()');
        this.setState({
          avgPattern,
          minMaxPattern,
          minWeekValue
        });
      }
     
    
    }


    generateArray = () => {
      let justBuyPrice = [];
      justBuyPrice.push(this.props.Island.buyPrice);
      var i = 0;
      for (i = 0; i < this.props.Island.prices.length; i++){
        if (this.props.Island.prices[i] !== 0) {
          justBuyPrice.push(this.props.Island.prices[i]);
        }
      }
          return justBuyPrice;

    }


    lineGraphData = {
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
            label: ("Island Buy Price"),
            data: new Array(12).fill(this.props.Island.buyPrice || null),
            fill: "true",
            backgroundColor: "transparent",
            borderColor: "#f17e5d",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [5, 15],
          },
          {
            label: ("Guaranteed Min"),
            data: new Array(12).fill(this.state.minWeekValue || null),
            fill: true,
            backgroundColor: "transparent",
            borderColor: "#007D75",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [3, 6],
          },
          {
            label: ("Daily Price"),
            data: Array.from({ length: 12 }, (v, i) => this.props.Island.prices[i] || null),
            fill: false,
            backgroundColor: "#9F2B67",
            borderColor: "#9F2B67",
          },
          {
            label: ("Average"),
            data: this.state.avgPattern || new Array(12).fill(null),
            backgroundColor: "#F0E16F",
            borderColor: "#F0E16F",
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
          },
          {
            label: ("Maximum"),
            data: [this.state.minMaxPattern[0][1],this.state.minMaxPattern[1][1],this.state.minMaxPattern[2][1],
            this.state.minMaxPattern[3][1],this.state.minMaxPattern[4][1],this.state.minMaxPattern[5][1],
            this.state.minMaxPattern[6][1],this.state.minMaxPattern[7][1],this.state.minMaxPattern[8][1],
            this.state.minMaxPattern[9][1],this.state.minMaxPattern[10][1],this.state.minMaxPattern[11][1]
          ] || new Array(12).fill(null),
            backgroundColor: "#A5D5A5",
            // backgroundColor: "#F79862",
            borderColor: "#6593F5",
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: '+1',
          },
          {
            label: ("Minimum"),
          data: [this.state.minMaxPattern[0][0],this.state.minMaxPattern[1][0],this.state.minMaxPattern[2][0],
            this.state.minMaxPattern[3][0],this.state.minMaxPattern[4][0],this.state.minMaxPattern[5][0],
            this.state.minMaxPattern[6][0],this.state.minMaxPattern[7][0],this.state.minMaxPattern[8][0],
            this.state.minMaxPattern[9][0],this.state.minMaxPattern[10][0],this.state.minMaxPattern[11][0]
          ] || new Array(12).fill(null),
            backgroundColor: "#B80F0A",
            borderColor: "#B80F0A",
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
          },

        ]
      }
      },};

      chartOptions = {
        maintainAspectRatio: false,
        showLines: true,
        tooltips: {
          intersect: false,
          mode: "index",
          filter: ({ datasetIndex }) => datasetIndex < 6,
        },
        scales: {
          y: {
            gridLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 400,
          },
        },
        elements: {
          line: {
            cubicInterpolationMode: "monotone",
          },
        },
        legend: {
          labels: {
            filter: ({ text = "" }) => !text.includes("sub"),
          },
        },
      };
   
    render() {
        return (
          <>
            <div className="content content-bg">
              <Row>
                <Col md="12">
                  <Card className="card-chart">
                    <CardHeader>
                    <CardTitle tag="h5"><b>{this.props.Island.name} </b>Turnip Price Prediction Model</CardTitle>
                      <p className="card-category">This Week</p>
                    </CardHeader>
                    <CardBody>
                    {this.state.minMaxPattern &&

                      <>
                      { !isTablet && 
                         <BrowserView>
                         <Line
                          data={ this.lineGraphData.data}
                          options={this.chartOptions.options}
                          redraw={false}
                          width={400}
                          height={170}
                       />
                       </BrowserView>
                      }
                     

                      <MobileView>
                      <Line
                        data={ this.lineGraphData.data}
                        options={this.chartOptions.options}
                        redraw={false}
                        width={400}
                        height={550}
                     />
                     </MobileView>
                     </>
    }
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        );
      }
};

export default PredictionChart;