import './../css/carbon_visual.scss'
import CarbonData from '../public/data/co2_emission.csv';
import Papa from 'papaparse';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,
     CategoryScale, LinearScale, PointElement, LineElement, Title,
     BarElement
    } from 'chart.js';
import { Pie, Line, Bar } from 'react-chartjs-2';
import Select from 'react-select';

import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, BarElement);

const CarbonVisual = () => {
    const [co2Data, setCo2Data] = useState([]);
    
    const countryList = [
        { "label": "Brazil", "value": "Brazil" },
        { "label": "China", "value": "China" },
        { "label": "EU27 & UK", "value": "EU27 & UK" },
        { "label": "France", "value": "France" },
        { "label": "Germany", "value": "Germany" },
        { "label": "India", "value": "India" },
        { "label": "Italy", "value": "Italy" },
        { "label": "Japan", "value": "Japan" },
        { "label": "ROW", "value": "ROW" },
        { "label": "Russia", "value": "Russia" },
        { "label": "Spain", "value": "Spain" },
        { "label": "UK", "value": "UK" },
        { "label": "US", "value": "US" },
        { "label": "WORLD", "value": "WORLD" }
      ];
    const monthList = [
        { "label": "Jan", "value": "01" },
        { "label": "Feb", "value": "02" },
        { "label": "Mar", "value": "03" },
        { "label": "Apr", "value": "04" },
        { "label": "May", "value": "05" },
        { "label": "Jun", "value": "06" },
        { "label": "Jul", "value": "07" },
        { "label": "Aug", "value": "08" },
        { "label": "Sept", "value": "09" },
        { "label": "Oct", "value": "10" },
        { "label": "Nov", "value": "11" },
        { "label": "Dec", "value": "12" },
    ];
    const yearList = [
        { "label": "2019", "value": "2019" },
        { "label": "2020", "value": "2020" },
        { "label": "2021", "value": "2021" },
        { "label": "2022", "value": "2022" },
    ];
    const sectorList = [
        { "label": "Power", "value": "Power" },
        { "label": "Industry", "value": "Industry" },
        { "label": "Ground Transport", "value": "Ground Transport" },
        { "label": "Residential", "value": "Residential" },
        { "label": "Domestic Aviation", "value": "Domestic Aviation" },
        { "label": "International Aviation", "value": "International Aviation" },
    ];

    const [country, setCountry] = useState('Brazil');
    const [month, setMonth] = useState('01');
    const [year, setYear] = useState('2019');
    const [sector, setSector] = useState('Power');
    const [avgPollutionData, setAvgPollutionData] = useState();
    const [sectorData, setSectorData] = useState();
    const [monthlyData, setMonthlyData] = useState();

    const numToMonth = monthList.reduce((obj, item) => Object.assign(obj, { [item.value]: item.label }), {});
    
    const lineOptions = {
        responsive: true,
        plugins: {
          legend: {
            display:false
          },
          title: {
            display: true,
            text: sector + ' Monthly Pollution in ' + year,
          },
        },
      };
    
    const barOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
        display: true,
        text: 'Average Daily Pollution in ' + numToMonth[month] + ' ' + year,
        },
    },
    };

    const pieOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
        display: true,
        text: 'Monthly Pollution across Sectors in '+ year,
        },
    },
    };

    function loadCarbonData(){
        Papa.parse(CarbonData, {
            download: true,
            header: true,
            dynamicTyping: true,
            delimiter: "",
            complete: ((result)=>{
                setCo2Data(result.data);
            })
        });
    }

    function getMonthlyData(){
        let filterData = co2Data.filter(function (el) {
            return el.country === country &&
                   el.month.includes('/' + year) &&
                   el.sector === sector;});
        filterData =filterData.reduce((obj, item) => Object.assign(obj, { [item.month]: item.sum }), {});
        filterData = Object.keys(filterData).sort().reduce(
            (obj, key) => { 
              obj[key] = filterData[key]; 
              return obj;
            }, 
            {}
          );
        console.log(filterData);
        setMonthlyData({
            labels:Object.keys(filterData),
            datasets:[{
            label: sector,
            data: filterData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }]
        });
    }

    function getSectorData(){
        const filterData = co2Data.filter(function (el) {
            return el.country === country &&
                   el.month === month + '/' + year;})
        if (filterData.length === 0){
            setSectorData(null);
            setAvgPollutionData(null);
        }
        else{
            setSectorData({
            labels: filterData.map((x) => x.sector),
            datasets: [
                {
                label: '# of Kilo Tons',
                data: filterData.map((x) => x.sum),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                },
            ],
            });
            setAvgPollutionData({
                labels: filterData.map((x) => x.sector),
                datasets: [
                    {
                    label: '# of Kilo Tons',
                    data: filterData.map((x) => x.mean),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                    },
                ],
                });
        }
        
    }

    function handleSelectCountry(country){
        setCountry(country.value);
    }

    function handleSelectMonth(month){
        setMonth(month.value);
    }

    function handleSelectYear(year){
        setYear(year.value);
    }

    function handleSelectSector(sector){
        setSector(sector.value);
    }

    useEffect(()=> {
        loadCarbonData();
    }, []);

    useEffect(() => {
        getSectorData();
    }, [co2Data, country, month, year]);

    useEffect(()=> {
        getMonthlyData();
    }, [co2Data, country, year, sector]);

    return(
        <div className="carbon-visual">
            <h1 className='title'>Carbon Emission Interative Dashboard</h1>
            <div className='filter-bar'>
                <div className='country'>
                    <b>Country: </b>
                    <Select
                        defaultValue={countryList[0]}
                        isSearchable={true}
                        options={countryList}
                        onChange={handleSelectCountry}
                    />
                </div>
                <div className='month'>
                    <b>Month:</b>
                    <Select
                        defaultValue={monthList[0]}
                        isSearchable={true}
                        options={monthList}
                        onChange={handleSelectMonth}
                    />
                </div>
                <div className='year'>
                    <b>Year:</b>
                    <Select
                        defaultValue={yearList[0]}
                        isSearchable={true}
                        options={yearList}
                        onChange={handleSelectYear}
                    />
                </div>
            </div>
            <div className='main-content'>
                <div className='half-card'>
                    {sectorData?<Pie options={pieOptions} data={sectorData}/>: 'Sorry, data is not available for this filter, please try something else!'}
                </div>
                <div className='half-card'>
                    <div className='top-card'>
                        {avgPollutionData?<Bar options={barOptions} data={avgPollutionData} />: 'Sorry, data is not available for this filter, please try something else!'}
                    </div>
                    
                    <div className='bottom-card'>
                        <div className='filter-bar'>
                            <div className='sector'>
                                <b>Sector: </b>
                                <Select
                                    defaultValue={sectorList[0]}
                                    isSearchable={true}
                                    options={sectorList}
                                    onChange={handleSelectSector}
                                />
                            </div>
                        </div>
                        {monthlyData? <Line options={lineOptions} data={monthlyData} />: 'Sorry, data is not available for this filter, please try something else!'}
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default CarbonVisual