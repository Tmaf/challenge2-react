import React from 'react';
import './ChartComponent.css';


const ChartComponent = (props)=>(
    <div className='chart' onClick={props.onClick}>
        {props.children}
    </div>

);

export default ChartComponent;