import React from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
  } from "reactstrap";
  import { Line } from "react-chartjs-2";
  import { calculate } from "./patterns.js";



class ChartRenderer extends React.Component {


    componentDidMount() {
        let { patterns, avgPattern, minMaxPattern, minWeekValue } = calculate(this.props.filter);

        this.setState({
        avgPattern,
        minMaxPattern,
        minWeekValue
        });
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
            // {
            //   data: [...this.props.oracle.avgPattern],
            //   fill: false,
            //   borderColor: "#fcc468",
            //   backgroundColor: "transparent",
            //   pointBorderColor: "#fcc468",
            //   pointRadius: 4,
            //   pointHoverRadius: 4,
            //   pointBorderWidth: 8
            // },
            {
              label: ("Island Buy Price"),
              data: new Array(12).fill(this.props.Island.buyPrice || null),
              fill: true,
              backgroundColor: "transparent",
              borderColor: "#f17e5d",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderDash: [5, 15],
            },
            {
              label: ("Guaranteed Min"),
              // data: new Array(12).fill(this.props.oracle.minWeekValue || null),
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
              // data: Array.from({ length: 12 }, (v, i) => this.props.oracle.filter[i + 1] || null),
              data: Array.from({ length: 12 }, (v, i) => this.props.Island.prices[i] || null),
              fill: false,
              backgroundColor: "#9F2B67",
              borderColor: "#9F2B67",
            },
            {
              label: ("Average"),
              // data: this.props.oracle.avgPattern || new Array(12).fill(null),
              data: this.state.avgPattern || new Array(12).fill(null),
              backgroundColor: "#F0E16F",
              borderColor: "#F0E16F",
              pointRadius: 0,
              pointHoverRadius: 0,
              fill: false,
            },
            {
              label: ("Maximum"),
              // data: [this.props.oracle.minMaxPattern[0][1],this.props.oracle.minMaxPattern[1][1],this.props.oracle.minMaxPattern[2][1],
              // this.props.oracle.minMaxPattern[3][1],this.props.oracle.minMaxPattern[4][1],this.props.oracle.minMaxPattern[5][1],
              // this.props.oracle.minMaxPattern[6][1],this.props.oracle.minMaxPattern[7][1],this.props.oracle.minMaxPattern[8][1],
              // this.props.oracle.minMaxPattern[9][1],this.props.oracle.minMaxPattern[10][1],this.props.oracle.minMaxPattern[11][1]
              data: [this.state.minMaxPattern[0][1],this.state.minMaxPattern[1][1],this.state.minMaxPattern[2][1],
              this.state.minMaxPattern[3][1],this.state.minMaxPattern[4][1],this.state.minMaxPattern[5][1],
              this.state.minMaxPattern[6][1],this.state.minMaxPattern[7][1],this.state.minMaxPattern[8][1],
              this.state.minMaxPattern[9][1],this.state.minMaxPattern[10][1],this.state.minMaxPattern[11][1]
            ] || new Array(12).fill(null),
              backgroundColor: "#A5D5A5",
              borderColor: "#A5D5A5",
              pointRadius: 0,
              pointHoverRadius: 0,
              fill: '+1',
            },
            {
              label: ("Minimum"),
            //   data: [this.props.oracle.minMaxPattern[0][0],this.props.oracle.minMaxPattern[1][0],this.props.oracle.minMaxPattern[2][0],
            //   this.props.oracle.minMaxPattern[3][0],this.props.oracle.minMaxPattern[4][0],this.props.oracle.minMaxPattern[5][0],
            //   this.props.oracle.minMaxPattern[6][0],this.props.oracle.minMaxPattern[7][0],this.props.oracle.minMaxPattern[8][0],
            //   this.props.oracle.minMaxPattern[9][0],this.props.oracle.minMaxPattern[10][0],this.props.oracle.minMaxPattern[11][0]
            // ] || new Array(12).fill(null),
            data: [this.state.minMaxPattern[0][0],this.state.minMaxPattern[1][0],this.state.minMaxPattern[2][0],
              this.state.minMaxPattern[3][0],this.state.minMaxPattern[4][0],this.state.minMaxPattern[5][0],
              this.state.minMaxPattern[6][0],this.state.minMaxPattern[7][0],this.state.minMaxPattern[8][0],
              this.state.minMaxPattern[9][0],this.state.minMaxPattern[10][0],this.state.minMaxPattern[11][0]
            ] || new Array(12).fill(null),
              backgroundColor: "#88C9A1",
              borderColor: "#88C9A1",
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
                    {this.props.Islands.OldZealand.prices.length > 1 &&
                       <Line
                       data={this.lineGraphData.data}
                       options={this.chartOptions.options}
                       width={400}
                       height={170}
                     />
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


export default ChartRenderer;