import { Calendar, Layout, Menu, Avatar, Dropdown } from 'antd';
import { DownOutlined, HomeOutlined, CarOutlined, ReadOutlined, HistoryOutlined, MoreOutlined, CalendarOutlined, DesktopOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; 
import DrivingSimulatorBooking from '../Booking/simulatorbooking';
import TrafficPoliceSimulatorBooking from '../Booking/trafficpolicebooking';
import Bookings from '../Booking/bookings';
import Home from '../Home/home'
import { useNavigate, useLocation, Route, Routes, Navigate } from 'react-router-dom';
import Dummy from '../Home/dummy';


const { SubMenu } = Menu;
const {Header, Content, Footer, Sider} = Layout;


const menu = (
    <Menu style={{marginTop:'22px'}}>
      <Menu.Item key="1">
        <a> Logout</a>
      </Menu.Item>
    </Menu>
  );

export default function Main() {
    const handleClick = e => {
        console.log('click ', e);
      };
    const navigation = useNavigate()

  return (
    <div>
        <Header className="header">
            <div style={{display:'flex', flexDirection:'row', alignItems:'center',  width:'100%', height:'100%', background:'', justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <img src="bbdcLogo.png" style={{height:'30px', width:'30px'}} />
                    <div style={{color:'white', fontWeight:'bold', marginLeft:'10px'}}>Bukit Batok Driving Center</div>
                </div>
                <div style={{display:'flex', flexDisplay:'row', alignItems:'center', color:'white'}}>
                    <Avatar src="avatar.jpeg"/>
                    <div style={{display:'flow', flexDirection:'column', marginRight:'10px', marginLeft:'10px', fontWeight:'bold', alignItems:'flex-start', justifyContent:'flex-start'}}>
                        <div style={{height:'20px'}}>
                            Harry Tan
                        </div>
                        <div >Class 2B</div>
                    </div>
                    
                   
                    <Dropdown overlay={menu} trigger={['click']}>
                        <DownOutlined style={{color:'white'}}/>
                    </Dropdown>
                </div>
            </div>
        </Header>
        <Layout>
            <Sider style={{background:'#FAFAFA'}}>
            <Menu
            onClick={handleClick}
            style={{ width: 256, height:'100vh', background:'#FAFAFA'}}
            defaultSelectedKeys={['home']}
            defaultOpenKeys={['home']}
            mode="inline"
            >
                <Menu.Item onClick={()=>{navigation('/home')}} key="home" icon={<HomeOutlined />}>Home</Menu.Item>
                <SubMenu key="simulators" icon={<DesktopOutlined />} title="Simulators">
                <Menu.Item key="driving simulator" onClick={()=>{navigation('/drivingsimulatorbookings')}}>Driving Simulator</Menu.Item>
                <Menu.Item key="traffic police simulator" onClick={()=>{navigation('/trafficpolicesimulatorbookings')}}>Traffic Police Simulator</Menu.Item>
                </SubMenu>
                <SubMenu key="practical" icon={<CarOutlined />} title="Practical">
                <Menu.Item key="9" onClick={()=>{navigation('/option9')}}>Option 9</Menu.Item>
                </SubMenu>
                <SubMenu key="theory" icon={<ReadOutlined />} title="Theory">
                <Menu.Item key="10" onClick={()=>{navigation('/option10')}}>Option 10</Menu.Item>
                </SubMenu>
                <Menu.Item key="bookings" icon={<CalendarOutlined />} onClick={()=>{navigation('/bookings')}}>Bookings</Menu.Item>
                <Menu.Item key="history" icon={<HistoryOutlined />} onClick={()=>{navigation('/history')}}>History</Menu.Item>
                <SubMenu key="sub4" icon={<MoreOutlined />} title="Others">
                <Menu.Item key="11" onClick={()=>{navigation('/option11')}}>Option 11</Menu.Item>
                <Menu.Item key="12" onClick={()=>{navigation('/option12')}}>Option 12</Menu.Item>
                </SubMenu>
            </Menu>
            </Sider>
            
            <Content style={{paddingLeft:'100px', paddingTop:'20px', background:'white', paddingRight:'50px'}}>
                 <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/" element={<Navigate replace to="/home"/>} />
                    <Route path="/drivingsimulatorbookings" element={<DrivingSimulatorBooking />} />
                    <Route path="/trafficpolicesimulatorbookings" element={<TrafficPoliceSimulatorBooking />} />
                    <Route path="/bookings" element={<Bookings />} />
                    
                    <Route path="/history" element={<Dummy title={"History"}/>} />
                    <Route path="/option9" element={<Dummy title={"Option 9"}/>} />
                    <Route path="/option10" element={<Dummy title={"Option 10"}/>} />
                    <Route path="/option11" element={<Dummy title={"Option 11"}/>} />
                    <Route path="/option12" element={<Dummy title={"Option 12"}/>} />


                 </Routes>
                 
                {/* <Booking /> */}
            </Content>
            
        </Layout>
        <Footer style={{ textAlign: 'center' }}>BBDC ©2022. All Rights Reserved. </Footer>
    </div>
  )
}
