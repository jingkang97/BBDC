import React from 'react'
import { Calendar, Badge } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styles from './booking.css'

function onPanelChange(value, mode) {
    console.log(value, mode);
  }

export default function simulatorbooking() {
    let blockDate = ['2022-02-22', '2022-02-25']
    function disableDate(current){
        // return current && current < moment().startOf('day') || 
        // return current === moment('2022-02-22', 'YYYY-MM-DD')
        return current && current < moment().startOf('day') || blockDate.findIndex(date => date === moment(current).format('YYYY-MM-DD')) !== -1
    }
    const onSelect = (value) => {
        
        console.log(value)
    }
    // function disable(current){
    // }
  return (
      <div style={{padding:'20px'}}>
          <div style={{marginBottom:'20px', display:'flex', flexDirection:'row', }}>
                <h1>Driving Simulator Booking</h1>
            </div>
        <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} disabledDate={disableDate} onSelect={onSelect}/>
        </div>
      </div>
    
  )
}
