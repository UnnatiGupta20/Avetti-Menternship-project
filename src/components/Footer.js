/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/images/logo.svg";
import { footer } from "../data";

const Footer = () => {
	const { social, copyright } = footer;
	const socialLink = social.map((item, index) => {
		const { icon, href } = item;
		return (
			<div
				key={index}
				className='w-12 h-12 text-white text-2xl rounded-full bg-gray-700 hover:bg-accent flex justify-center items-center transition'
			>
				<a href={href}>{icon}</a>
			</div>
		);
	});
	return (
		<footer className='section bg-primary'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
					<a href='#' className='mb-6 lg:mb-0'>
						<img src={Logo} alt='Logo' />
					</a>
					<div className='flex gap-x-4'>{socialLink}</div>
				</div>
				<div className='text-white text-center'>&copy; {copyright}</div>
			</div>
		</footer>
	);
};

export default Footer;
