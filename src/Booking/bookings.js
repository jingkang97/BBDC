import React from 'react'
import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    //   render: text => <a>{text}</a>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (text, record) => (
          <Space size="middle">
            <a>Cancel</a>
          </Space>
        ),
      },
]

const data = [
    {
      key: '1',
      type: 'Pratical Training',
      date: '01/12/2022',
      time: '8.00AM - 9.00AM'
    },
    {
        key: '2',
        type: 'Pratical Training',
        date: '02/12/2022',
        time: '8.00AM - 9.00AM'
      },
      {
        key: '3',
        type: 'Pratical Training',
        date: '03/12/2022',
        time: '8.00AM - 9.00AM'
      },
  ];

const Bookings = () => {
    return ( 
        <div style={{padding:'20px'}}>
            <div style={{marginBottom:'20px', display:'flex', flexDirection:'row', }}>
                <h1>Driving Simulator Booking</h1>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
     );
}
 
export default Bookings;
