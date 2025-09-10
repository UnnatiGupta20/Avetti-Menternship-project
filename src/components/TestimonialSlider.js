import React from "react";
import { testimonial } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSlider = () => {
	const { persons } = testimonial;
	return (
		<Swiper
			centeredSlides={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			navigation={true}
			modules={[Autoplay, Navigation]}
			className='max-w-[635px] w-full testimonialSlider'
		>
			{persons.map((person, index) => (
				<SwiperSlide key={index}>
					<div className='w-full py-5 min-h-[280px]'>
						<div className='flex gap-x-5'>
							<img src={person.avatar.type} alt={person.name} />
							<div className='self-center'>
								<h3 className='text-xl font-semibold'>{person.name}</h3>
								<p>{person.occupation}</p>
							</div>
						</div>
						<div className='py-8'>{person.message}</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default TestimonialSlider;
