import React from "react";
import { newInStore } from "../data";
import Hero from "./Hero";
import NewItemsSlider from "./NewItemsSlider";

const NewItems = () => {
	const { title, subtitle, link, icon } = newInStore;
	return (
		<section className='section'>
			<div className='container mx-auto relative'>
				{/* text */}
				<div className='flex gap-5 py-12 lg:flex-col'>
					<h3 className='title lg:max-w-[245px] lg:mt-[30px] lg:mb-[90px]'>
						{title}
					</h3>
					<p className='subtitle lg:max-w-[245px] font-light text-xl'>
						{subtitle}
					</p>
					<div className='hidden lg:flex items-center'>
						<a
							className='font-medium transition-all lg:text-lg 
						hover:border-b hover:border-primary lg:items-center '
							href={<Hero />}
						>
							<span>{link}</span>
						</a>
						<div className='text-3xl'>{icon}</div>
					</div>
				</div>
				{/* Slider */}
				<div className='lg:container lg:mx-auto lg:max-w-[880px] xl:max-w-[990px] lg:absolute lg:py-12 lg:-right-24 lg:top-0'>
					<NewItemsSlider />
				</div>
			</div>
		</section>
	);
};

export default NewItems;
