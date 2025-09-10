import React from "react";
import { testimonial } from "../data";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
	const { title, image } = testimonial;
	return (
		<section className='section container mx-auto'>
			<div className='flex flex-col lg:flex-row gap-5 w-full justify-between'>
				<div>
					<h1 className='text-3xl font-semibold pb-5'>{title}</h1>
					<TestimonialSlider />
				</div>
				<div>
					<img src={image.type} alt='Living Room' />
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
