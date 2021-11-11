
import React, { Component } from 'react';
//import { withStyles } from '@material-ui/core/styles';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

import ApiService from "../common/ApiService";

class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      completed: 0,
      searchKeyword: ''
    }
  }

  componentDidMount() {
    this.search();
  }

  search = () => {
    this.setState({ products: []});

    this.callApi()
      .then(res => this.setState({products: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    
    const response = await ApiService.fetchTran('/products')

    console.log(response);

    const body = response.data._embedded.products;
    console.log("body:"+body);
    return body;
  }

  
  render() {

    const columns = [
      { field: 'prdcd', headerName: '상품코드', headerAlign: 'center', align:'center', width: 150 },
      {
        field: 'prdnm',
        headerName: '상품명',
        headerAlign: 'center',
        width: 250,
        editable: true,
      },
      {
        field: 'insPrd',
        headerName: '보험기간',
        headerAlign: 'center',
        align:'center',
        width: 140,
        editable: true,
        sortable: false,
      },
      {
        field: 'pmPrd',
        headerName: '납입기간',
        headerAlign: 'center',
        align:'center',
        width: 140,
        editable: true,
        sortable: false,
      },
      {
        field: 'pmCyl',
        headerName: '납입주기',
        sortable: false,
        editable: true,
        headerAlign: 'center',
        align:'center',
        width: 140,
        //type: "singleSelect",
        //valueOptions: pmCylCdList,
        //renderCell: getCodeName,
      },
      {
        field: 'minEntAmt',
        headerName: '최소가입금액',
        sortable: false,
        editable: true,
        headerAlign: 'center',
        align:'center',
        width: 150,
      },
      {
        field: 'maxEntAmt',
        headerName: '최대가입금액',
        sortable: false,
        editable: true,
        headerAlign: 'center',
        align:'center',
        width: 150,
      },
      {
        field: 'minEntAmt',
        headerName: '최소가입금액',
        sortable: false,
        editable: true,
        headerAlign: 'center',
        align:'center',
        width: 150,
      },
      {
        field: 'minEntAge',
        headerName: '최소가입연령',
        sortable: false,
        editable: true,
        headerAlign: 'center',
        align:'center',
        width: 150,
      },
      {
        field: 'maxEntAge',
        headerName: '최대가입연령',
        sortable: false,
        editable: true,
        headerAlign: 'center',
        align:'center',
        width: 150,
      },
    ];
  

    return (
      <div style={{ marginTop: "5px", marginLeft: "10px", height: 400, width: '92%', alignItems: "center" }}>
      
      <Typography variant="h6" ><LabelImportantIcon color="primary" style={{verticalAlign:"middle"}}/>Product List</Typography><br/>
      <Box style={{textAlign: "right", marginBottom: "5px"}}>
      <Button variant="contained" color="primary" style={{ height: 30}} onClick={this.search}>조회</Button>
      </Box>

      <div style={{ height: 400 } }>
        <DataGrid
          getRowId={(r) => r.prdcd}  
          rowHeight={45}
          rows={  this.state.products }
          columns={columns}
          pageSize={5}
          components={{
            Toolbar: GridToolbar,
          }}
          checkboxSelection
          disableSelectionOnClick
          
        />
      </div>
      </div>
    );

  }
}

export default (ProductList);