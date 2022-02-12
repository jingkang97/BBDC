import { useNavigate, useLocation, Route, Routes, Navigate } from 'react-router-dom';

const Dummy = ({title}) => {
    const navigation = useNavigate()
    return ( 

        <div style={{padding: '20px'}}>
            <div style={{marginBottom:'20px', display:'flex', flexDirection:'row', }}>
                <h1>{title}</h1>
            </div>
        </div>
     );
}
 
export default Dummy;