import React from "react";

import {
    dashboard24HoursPerformanceChart,
  
  } from "variables/charts.jsx";

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
  import { BrowserView, MobileView, isTablet } from "react-device-detect";


class WaveChart extends React.Component {

  componentDidMount() {

  }
  
    render() {

        let waveGraphData = {
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
                // datasets: [
                 
                //   this.props.OldZealand,
                //   this.props.SandyNeck,
                //   this.props.Kokomo,
                //   this.props.LANDon,
                //   this.props.GingerIsle
                  
                // ]

                datasets: this.props.datasets.sort((a, b) => (a.data.prices && a.data.prices[0] > b.data.prices[0]) ? 1 : -1)
              };
            },};
    
        return (
            <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Turnip Prices</CardTitle>
                  <p className="card-category">This Week</p>
                </CardHeader>

                <CardBody>
                  {this.props.Islands.OldZealand.prices.length > 1 &&

                  <>
                  { !isTablet && 
                     <BrowserView>
                     <Line
                     data={waveGraphData.data}
                     options={dashboard24HoursPerformanceChart.options}
                     width={400}
                     height={100}
                   />
                   </BrowserView>
                  }
                 

                <MobileView>
                  <Line
                  data={waveGraphData.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={300}
                  />
                </MobileView>
                </>


                  }
                  
                </CardBody>
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
        );
    }

}

export default WaveChart;