import React, { ReactNode } from 'react'
import img from './assets/warning.png'

interface MyProp {
	children: ReactNode
}

interface MyState {
	hasError: boolean
}

export class ErrorBoundary extends React.Component<MyProp, MyState> {
	constructor(props: MyProp) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props

		if (hasError) {
			return (
				<div className='flex flex-col justify-center items-center gap-12 w-full h-full px-2 py-4 bg-[#ffffff]'>
					<img className='w-20 h-20' src={img} alt='Error' />
					<p className='font-montserrat text-xl font-bold text-center leading-8 uppercase'>
						Something went wrong. Please try again or reload the page
					</p>
				</div>
			)
		}

		return children
	}
}
