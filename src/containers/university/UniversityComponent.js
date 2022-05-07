import React, { useState,useEffect } from 'react';

import { useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import {
  SearchState,
  IntegratedFiltering,
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
  
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';


const UniversityComponent = () =>{
  const universities = useSelector((state)=>state.allUniversities.universities); 

  const [columns] = useState([
    { name: 'country', title: 'country' },
    { name: 'name', title: 'name' },
    { name: 'web_pages', title: 'web_pages' },
  ]);
  const [rows , setRows] = useState([]);

  useEffect(()=>{
    setRows(universities)

  },[universities]);

     return(
      <div className="ui grid container">
       {Object.keys(universities).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
       <PagingState
          defaultCurrentPage={0}
          pageSize={5}
        />
        <SearchState  />
        <IntegratedFiltering />
        <IntegratedPaging />
        <Table />
        <TableHeaderRow />
        <PagingPanel />
        <Toolbar />
        <SearchPanel />
      </Grid>
    
      </Paper>
      )}
      </div>
    )



}

export default  UniversityComponent;