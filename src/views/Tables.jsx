import React from 'react';
import MaterialTable from 'material-table';
import { IslandName } from './utils';

import { forwardRef } from 'react';
import base from './Base'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";


import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


export class Tables extends React.Component {
  state = {
    Islands: {
      OldZealand: {
        name: 'OldZealand',
        owner: 'Will',
        prices: [104,99,56,53,0,0,0,0,0,0,0,0],
        buyPrice: 94,
      },
      SandyNeck: {
        name: 'SandyNeck',
        owner: 'Christina',
        prices: [86,136,150,151,0,0,0,0,0,0,0,0],
        buyPrice: 96,
      },
      Kokomo: {
        name: 'Kokomo',
        owner: 'Shawn/Abby',
        prices: [65,61,56,0,0,0,0,0,0,0,0,0],
        buyPrice: 98,
      },
      LANDon: {
        name: 'LANDon',
        owner: 'Nick',
        prices: [92,72,76,0,0,0,0,0,0,0,0,0],
        buyPrice: 92,
      },
      GingerIsle: {
        name: 'GingerIsle',
        owner: 'Leslie',
        prices: [90,86,81,81,76,0,0,0,0,0,0,0],
        buyPrice: 110,
      }
  }
};
  
  componentDidMount() {

    this.ref = base.syncState(IslandName, {
      context: this,
      state: 'Islands'
  });
  }

  componentDidUpdate(){
    console.log('component did update');
    if (!this.state.columns) {
        this.setState({
      columns: [
        { title: 'Island', field: 'name' },
        { title: 'Buy Price', field: 'buyPrice' },
        { title: 'Monday (am)', field: 'prices[0]', type: 'numeric' },
        { title: 'Monday (pm)', field: 'prices[1]', type: 'numeric' },
        { title: 'Tuesday (am)', field: 'prices[2]', type: 'numeric' },
        { title: 'Tuesday (pm)', field: 'prices[3]', type: 'numeric' },
        { title: 'Wednesday (am)', field: 'prices[4]', type: 'numeric' },
        { title: 'Wednesday (pm)', field: 'prices[5]', type: 'numeric' },
        { title: 'Thursday (am)', field: 'prices[6]', type: 'numeric' },
        { title: 'Thursday (pm)', field: 'prices[7]', type: 'numeric' },
        { title: 'Friday (am)', field: 'prices[8]', type: 'numeric' },
        { title: 'Friday (pm)', field: 'prices[9]', type: 'numeric' },
        { title: 'Saturday (am)', field: 'prices[10]', type: 'numeric' },
        { title: 'Saturday (pm)', field: 'prices[11]', type: 'numeric' },
        
      ],
      data: [
        {name: this.state.Islands.OldZealand.name, buyPrice: this.state.Islands.OldZealand.buyPrice, prices: this.state.Islands.OldZealand.prices},
        {name: this.state.Islands.SandyNeck.name, buyPrice: this.state.Islands.SandyNeck.buyPrice, prices: this.state.Islands.SandyNeck.prices},
        {name: this.state.Islands.Kokomo.name, buyPrice: this.state.Islands.Kokomo.buyPrice, prices: this.state.Islands.Kokomo.prices},
        {name: this.state.Islands.LANDon.name, buyPrice: this.state.Islands.LANDon.buyPrice, prices: this.state.Islands.LANDon.prices},
        {name: this.state.Islands.GingerIsle.name, buyPrice: this.state.Islands.GingerIsle.buyPrice, prices: this.state.Islands.GingerIsle.prices},
      ],
    })
  }
  if (this.state.data && this.state.data[0]){
    // set these manually to avoid setting tableData in firebase
    this.state.Islands.OldZealand.prices = this.state.data[0].prices;
    this.state.Islands.SandyNeck.prices = this.state.data[1].prices;
    this.state.Islands.Kokomo.prices = this.state.data[2].prices;
    this.state.Islands.LANDon.prices = this.state.data[3].prices;
    this.state.Islands.GingerIsle.prices = this.state.data[4].prices;

    this.state.Islands.OldZealand.buyPrice = this.state.data[0].buyPrice;
    this.state.Islands.SandyNeck.buyPrice = this.state.data[1].buyPrice;
    this.state.Islands.Kokomo.buyPrice = this.state.data[2].buyPrice;
    this.state.Islands.LANDon.buyPrice = this.state.data[3].buyPrice;
    this.state.Islands.GingerIsle.buyPrice = this.state.data[4].buyPrice;
  }
  }
  
  componentWillUnmount() {
  
    if (this.state.Islands.OldZealand.tableData) {
      delete this.state.Islands.OldZealand.tableData;
    }
    base.removeBinding(this.ref);
  };

  render () {

    return (
      <>
        <div className="content">
          <Row>
             <Col md="12">
               <Card>
                 <CardHeader>
                  <CardTitle tag="h4">Edit Data</CardTitle>
                 </CardHeader>
                 <CardBody>
      {this.state && 
        <MaterialTable
        title="This Week's Prices"
        icons={tableIcons}
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  console.log('new data');
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
        }}
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


} // end render
export default Tables;
