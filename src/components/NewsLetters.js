import React from "react";
import { newsletter } from "../data";

const NewsLetters = () => {
	const { title, subtitle, placeholder, buttonText } = newsletter;
	return (
		<div className='section bg-newsletter lg:bg-cover bg-left min-h-[490px]'>
			<div className='container mx-auto flex justify-center lg:justify-end'>
				<div className='w-full max-w-[558px] text-center lg:text-left'>
					<h2 className='text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 leading-normal mb-5 text-white'>
						{title}
					</h2>
					<p className='text-xl font-light text-white mb-5'>{subtitle}</p>
					{/* Input Box */}
					<div className='my-10 flex flex-col lg:flex-row gap-5'>
						<input
							type='text'
							placeholder={placeholder}
							className='lg:text-xl h-16 px-6 outline-none placeholder:text-base text-gray-600 lg:w-96 rounded lg:flex-1'
						/>
						<button className='bg-[var(--dark)]  text-xl font-medium h-16 px-8 rounded hover:bg-slate-900 text-white transition'>
							{buttonText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsLetters;
