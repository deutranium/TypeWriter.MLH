import React, { useState, useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function ProgressLine(props) {
    const [total, setTotal] = useState(1);
    const [number, setNumber] = useState(0);
    const [percent, setPercent] = useState(50);

    useEffect(() => {
        //console.log(props);
        setNumber(props.number);
        setTotal(props.total);
        //console.log(props.number);
        //console.log(props.total);
        //setPercent(60);
        setPercent((props.number/props.total)*100)

      }, [props.total, props.number]);

    return (
        <div>
            {/* <div className="progress"> */}
            <ProgressBar animated now={percent} />
            {/* </div> */}
        </div>
    )
}
