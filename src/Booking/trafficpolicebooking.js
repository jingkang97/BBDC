import React, {useState} from 'react'
import { Calendar, Badge } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styles from './booking.css'

function onPanelChange(value, mode) {
    console.log(value, mode);
  }

const TrafficBooking = () => {
    let blockDate = ['2022-02-22', '2022-02-25']
    const [selectedDate, setSelectedDate] = useState(null)
    function disableDate(current){
        // return current && current < moment().startOf('day') || 
        // return current === moment('2022-02-22', 'YYYY-MM-DD')
        return current && current < moment().startOf('day') || blockDate.findIndex(date => date === moment(current).format('YYYY-MM-DD')) !== -1
    }
    const onSelect = (value) => {
        setSelectedDate(moment(value).toString())
        console.log(moment(value).toString())
    }
    // function disable(current){
    // }
  return (
      <div style={{padding:'20px'}}>
          <div style={{marginBottom:'20px', display:'flex', flexDirection:'row', }}>
                <h1>Traffic Police Simulator Booking</h1>
            </div>
        <div className="site-calendar-demo-card" style={{display:'flex', flexDirection:'row'}}>
            <div style={{width:'100%'}}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} disabledDate={disableDate} onSelect={onSelect}/>

            </div>
            <div style={{padding:'20px', width:'400px', height:'100%', background:''}}>
                <h1>Available Time Slots</h1>
                {selectedDate ? selectedDate : 'Please select a date' }
                {selectedDate ? '10am': null}
            </div>
        </div>
      </div>
    
  )
}

export default TrafficBooking