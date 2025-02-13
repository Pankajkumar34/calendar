"use client"
import React, { useState } from "react";
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const ReactCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());
    return (
        <>
            <Calendar className='shadow-[-1px_1px_3px_1px] ' onChange={onChange} value={value} />
        </>
    )
}
export default ReactCalendar;