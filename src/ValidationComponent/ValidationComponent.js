import React from 'react';


const ValidationComponent = (props)=>(
    <div>
        <p>{props.length<props.limit? 'Text too short': 'Text long enough'}</p>
    </div>
);

export default ValidationComponent;