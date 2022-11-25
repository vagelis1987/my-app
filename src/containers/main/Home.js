import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  PagingState,
  GroupingState,
  IntegratedGrouping,
  IntegratedPaging,
  SearchState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  SearchPanel,
  Toolbar,
} from '@devexpress/dx-react-grid-material-ui';

import { useDispatch, useSelector } from 'react-redux';
import { setByCompany } from '../../redux/actions/byCompanyActions';

const config = {
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIQ0wgUHJvamVjdCBLRUVQIFJBTkRPTSIsInN1YiI6IkNOPWFkbWluIGFkbWluL089dGVzdGxhYiIsInNjb3BlIjoiTUFJTCAkREFUQSAkREVDUllQVCIsIm5hbWVzIjpbIkNOPWFkbWluIGFkbWluL089dGVzdGxhYiIsImFkbWluIGFkbWluIiwiKiIsIiovTz10ZXN0bGFiIiwiTG9jYWxEb21haW5BZG1pbnMiXSwiaWF0IjoxNjY5Mzg3MzE2LCJleHAiOjE2NjkzOTQ1MTYsImF1ZCI6IkRvbWlubyJ9.8dI9zplC5GpTVFyOVW8LFtFa_S43Z6LZepiqbWz1lGQ`,
  },
};

const Home = () => {
  const byCompany = useSelector(state => state.allbyCompany.byCompany);

  const [columns] = useState([
    { name: 'J_Company', title: 'Company' },
    { name: 'year', title: 'year' },
    { name: 'monthDsp', title: 'monthDsp' },
    { name: 'J_Date', title: 'Date' },
    { name: 'J_Name', title: 'Name' },
    { name: 'J_Project', title: 'Project' },
    { name: 'J_Comment', title: 'Comment' },
  ]);

  const [grouping, setGrouping] = useState([{ columnName: 'J_Company' }]);
  const dispatch = useDispatch();

  const getByCompany = async () => {
    const response = await axios
      .get(
        'http://10.0.1.159:8880/api/v1/lists/V_BY_COMPANY_DSP?dataSource=misc',
        config
      )
      .catch(err => {
        console.log('Err', err);
      });

    console.log(response.data);
    dispatch(setByCompany(response.data));

    // setData(response.data);
  };

  useEffect(() => {
    getByCompany();
    //  setData(byCompany);
  }, []);

  return (
    <div className='ui grid container'>
      <h1> Home Page VN</h1>

      <div className='ui grid container' style={{ marginTop: '100px;' }}>
        <div className='column rp'>
          <Grid rows={byCompany} columns={columns}>
            <PagingState defaultCurrentPage={0} pageSize={50} />
            <DragDropProvider />
            <SearchState />
            <GroupingState grouping={grouping} onGroupingChange={setGrouping} />
            <IntegratedFiltering />
            <IntegratedGrouping />
            <IntegratedPaging />
            <Table />
            <TableHeaderRow showGroupingControls />
            <TableGroupRow />
            <Toolbar />
            <SearchPanel />
            <GroupingPanel showGroupingControls />
            <PagingPanel />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
