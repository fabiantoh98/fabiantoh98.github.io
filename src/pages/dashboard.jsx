import { useState } from 'react';
import './../css/dashboard.scss'
import CarbonVisual from '../component/carbon_visual';

const Dashboard = () => {
    // first visualisation
    // https://restcountries.com/#endpoints-all
    const [dashboardMode, setDashboardMode] = useState('carbon_visual');

    function handleChangeDashboard(dashboard){
        setDashboardMode(dashboard);
    }

    const project = () => {
        switch(dashboardMode) {
            case "carbon_visual": return <CarbonVisual/>;
            default: return <h1>Working in Progress</h1>;
        }
    }
    return(
        
        <div className="dashboard">
            <div className="dashboard-navbar">
                <button className={dashboardMode==='carbon_visual'?'selected-dashboard-link':'dashboard-link'} onClick={() => {handleChangeDashboard('carbon_visual');}}>CO2 Emission</button>
                <button className={dashboardMode==='Coming Soon'?'selected-dashboard-link':'dashboard-link'} onClick={() => {handleChangeDashboard('Coming Soon');}}>Coming Soon</button>
            </div>
            <div className='main-dashboard'>
                {project()}
            </div>
        </div>
    )
}

export default Dashboard