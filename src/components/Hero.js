import React from "react";
import { hero } from "../data";
import Stats from "./Stats";

const Hero = () => {
	const { title, subtitle, buttonText } = hero;
	return (
		<section className='w-full h-[850px] bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px]  relative mb-12 lg:bg-cover lg:mb-28'>
			<div className='container mx-auto text-center'>
				{/* title */}
				<h1 className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight font-primary'>
					{title}
				</h1>
				{/* Sub-Title */}
				<h2 className='mb-[30px] max-w-[672px] mx-auto lg:mb-[65px] lg:text-xl opacity-80'>
					{subtitle}
				</h2>
				{/* button */}
				<button className='bg-[var(--btn-light)] hover:bg-[var(--btn-light)] backdrop-blur-md p-2 px-9 mb-[159px] rounded-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px] lg:text-xl'>
					{buttonText}
				</button>
				{/* Stats */}
				<div>
					<Stats />
				</div>
			</div>
		</section>
	);
};

export default Hero;
