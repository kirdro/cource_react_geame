import React from 'react'
import { Shape, Layer, Arc, Circle } from 'react-konva';

interface IProps {
    x: number;
    y: number;
}


const CircleComponent = (props: IProps) => {
    const {
        x,
        y
    } = props

    return (
        <Layer x={x}
            y={y}
        >
            <Circle x={50} y={50} radius={50} fill="green" />
        </Layer>
    )
}

export default CircleComponent