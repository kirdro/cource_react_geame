'use client'
import React, {
	useEffect,
	useState
} from 'react'
import { Stage, Layer, Rect, Circle } from 'react-konva';
import { DivWrapperSC } from './styles'
import Slider from './components/slider';
import CircleComponent from './components/Circle';

const SliderPage = () => {
	const [
		size,
		setSize
	] = useState<{
		w: number,
		h: number
	}>({
		w: 0,
		h: 0
	})
	const [
		xSlider,
		setXSider
	] = useState<number>(0)

	const [
		positionCircle,
		setPOsitionCircle
	] = useState<{
		x: number,
		y: number
	}>({
		x: 0,
		y: 0
	})

	let statusBottom = true

	useEffect(() => {
		setSize({
			w: window.innerWidth - 300,
			h: window.innerHeight
		})
		setXSider((window.innerWidth - 300) / 2 - 101)
	}, [])

	useEffect(() => {
		if (size.h > 0) {
			setInterval(changePosition, 10)
		}
		
	}, [size.h])

	const onPress = (e: any) => {
		if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
			if (e.key === 'ArrowRight') {
				setXSider(pervState => pervState < size.w - 300 ? pervState + 50 : pervState)
			}
			else {
				setXSider(pervState => pervState > 50 ? pervState - 50 : pervState)
			}
			
		}
		
	}


	const changePosition = () => {
		
		
		setPOsitionCircle(preValue => {
			
			let _value
			if (statusBottom) {
				_value = preValue.y + 10
				// console.log('>>>>>>>>>>>>>>>>>>>>', preValue.y , size.h );
				if (preValue.y >= size.h - 100) {
					statusBottom = false
				}
			}
			else {
				_value = preValue.y - 10
				if (preValue.y <= 0) {
					statusBottom = true
				}
			}
			
			return {y: _value, x: preValue.x}
		})
	}

	
	return (
		<DivWrapperSC
			tabIndex={-1}
			onKeyDown={onPress}
		>
			{
				size.w > 0 ? 
				<Stage width={size.w} height={size.h}>
					<Slider
						x={xSlider}
						y={size.h - 40}
					/>
					<CircleComponent
						x={positionCircle.x}
						y={positionCircle.y}
					/>

				</Stage>
				 : 
				null
			}
			
		</DivWrapperSC>
	)
}

export default SliderPage