'use client'
import React, {
	useEffect,
	useState
} from 'react'
import { Shape, Layer, Arc, Circle } from 'react-konva';
import { DivWrapperSC } from './../styles'

interface IProps {
    x: number;
    y: number;
}

const Slider = (props: IProps) => {
	const {
        x,
        y
    } = props

	
	return (
		<Layer x={x} y={y}>
            <Arc 
                innerRadius={0}
                outerRadius={16}
                angle={180}
                fill='black'
                stroke='black'
                rotationDeg={90}
                x={17}
                y={15}
            />
            <Shape
                sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(17, 0);
                    context.lineTo(220, 0);
                    context.lineTo(220, 30);
                    context.lineTo(17, 30);
                    context.closePath();
                    // (!) Konva specific method, it is very important
                    context.fillStrokeShape(shape);
                }}
                fill="black"
                stroke="black"
                strokeWidth={4}
            />
            <Arc 
                innerRadius={0}
                outerRadius={16}
                angle={180}
                fill='black'
                stroke='black'
                rotationDeg={270}
                x={220}
                y={15}
            />
        </Layer>
	)
}

export default Slider