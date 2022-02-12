import React, {useState} from 'react'
import { Calendar, Tag, Button, Modal } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styles from './booking.css'

function onPanelChange(value, mode) {
    console.log(value, mode);
  }

const Simulatorbooking = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    let blockDate = ['2022-02-22', '2022-02-25']
    const { CheckableTag } = Tag;
    const tagsData = ['8.00AM - 9.00AM', '9.00AM - 10.00AM', '10.00AM - 11.00AM', '11.00AM-12.00PM'];
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTags, setSelectedTags] = useState([])
    const handleTagChange = (tag, checked) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        setSelectedTags(nextSelectedTags)
    }
    function disableDate(current){
        // return current && current < moment().startOf('day') || 
        // return current === moment('2022-02-22', 'YYYY-MM-DD')
        return current && current < moment().startOf('day') || blockDate.findIndex(date => date === moment(current).format('YYYY-MM-DD')) !== -1
    }
    const onSelect = (value) => {
        setSelectedDate(moment(value).format('YYYY DD MMMM dddd').toString())
        console.log(moment(value).toString())
        setSelectedTags([])
    }
    const buttonClick = (e) => {

    }
    // function disable(current){
    // }
  return (
      <div style={{padding:'20px'}}>
          <div style={{marginBottom:'20px', display:'flex', flexDirection:'row', }}>
                <h1>Driving Simulator Booking</h1>
            </div>
        <div className="site-calendar-demo-card" style={{display:'flex', flexDirection:'row'}}>
            <div style={{width:'100%'}}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} disabledDate={disableDate} onSelect={onSelect}/>

            </div>
            <div style={{padding:'20px', width:'400px', height:'100%', background:''}}>
                <h1>Available Time Slots</h1>
                <h3 >{selectedDate ? selectedDate : 'Please select a date' }</h3>
                {selectedDate ?  <div style={{display:'flex', flexDirection:'column'}}>
                    {tagsData.map(tag=> (
                        <CheckableTag key={tag} 
                        style={{border:'solid 1px #1890FF', marginBottom:'10px', fontSize:'15px', padding:'20px'}}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange = {checked => handleTagChange(tag, checked)}
                        >
                            {tag}
                        </CheckableTag>
                    ))}
                    
                    </div>: null}
            </div>
        </div>
        <div style={{display:'flex', width:'100%', marginTop: '20px'}}>
            <Button type = "primary" size="large" onClick={showModal} disabled={!selectedTags.length}>Next</Button>
        </div>
        <Modal title="Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Your booking for:</p>
        {selectedTags.map(session => (
            <div style={{fontWeight:'bold'}}>
                {session}
            </div>
        ))}
        <div style={{marginTop:'10px'}}>on <span style={{fontWeight:'bold'}}>{selectedDate}</span> is confirmed!</div>        
      </Modal>
      </div>
    
  )
}

export default Simulatorbooking