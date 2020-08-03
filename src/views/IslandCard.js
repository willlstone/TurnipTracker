import React from "react";
import { withRouter } from "react-router-dom";

import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
  } from "reactstrap";

class IslandCard extends React.Component {

    handleChange = (event) => {
        // 1. take a copy of the current Island
        const updatedIsland = {
            ...this.props.Island
        };
        // If it's Sunday, set the buyPrice, otherwise, set the price array
        if (this.props.time < 0) {updatedIsland.buyPrice = event.currentTarget.value;}
        else {updatedIsland.prices[this.props.time] = event.currentTarget.value;}
        this.props.updateIsland(this.props.Island.name, updatedIsland);

    }

    render() {
        return (
            <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className={this.props.diva}>
                      <i className={this.props.icona} 
                      onClick={ (event) => {this.props.history.push("/" + this.props.Island.name)}}/>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">{this.props.Island.name}</p>
                      <CardTitle
                      // onClick={this.populateIslands}
                      >
                        <Row className="card-row">
                        <span className="bell-span">
                          <img alt="bells" className="bell-icon" src={require("assets/img/bells.png")} />
                        </span> 
                        <form 
                        className="dash-form">
                          {this.props.time >= 0 &&
                            <input onChange={this.handleChange}
                              type='text' name="price" className="dash-input"
                              style={{overflow: 'hidden'}}
                              value={this.props.Island.prices[this.props.time]}>
                            </input>
                          }
                          {this.props.time < 0 && 
                           <input onChange={this.handleChange}
                              type='text' name="price" className="dash-input" value={this.props.Island.buyPrice}>
                            </input>
                          }
                        </form> 
                        </Row>
                      </CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
        );
    }
}

export default withRouter(IslandCard);