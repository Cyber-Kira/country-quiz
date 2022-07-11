import React from 'react'

interface Props {
	title: string
	text: string
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Popup = ({ title, text, setIsOpen }: Props) => {
	return (
		<div className='fixed inset-0 m-auto w-[350px] h-[350px] bg-white-50 shadow-lg animate-grow-in'>
			<div className='flex justify-between'>
				<button
					type='button'
					onClick={() => setIsOpen(false)}
					className='p-3 order-1'
				>
					<span className='material-symbols-outlined'>close</span>
				</button>
				<p className='flex justify-center text-xl font-poppins font-bold text-center py-2 self-center ml-3'>
					{title}
				</p>
			</div>
			<div className='border-b border-slate-400 border-opacity-30' />
			<p className='p-3 font-poppins text-md'>{text}</p>
		</div>
	)
}
