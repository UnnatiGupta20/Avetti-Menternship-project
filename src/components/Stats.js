import React from "react";

// import data
import { stats } from "../data";

const Stats = () => {
	return (
		<div className='bg-[var(--primary-color)] p-12 rounded-2xl'>
			<div className='flex flex-wrap gap-y-8'>
				{stats.map((item, index) => (
					<div
						className='min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:even:border-r lg:last:border-none'
						key={index}
					>
						<div className='font-semibold text-2xl lg:text-4xl'>
							{item.value}
						</div>
						<div className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>
							{item.text}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Stats;
