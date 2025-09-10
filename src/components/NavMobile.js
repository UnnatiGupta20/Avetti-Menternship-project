import React from "react";
import { navigation } from "../data";

const NavMobile = () => {
	const navItems = navigation.map((item, index) => (
		<li key={index}>
			<a
				href={item.href}
				className={`text-black capitalize hover:border-b transition-all`}
			>
				{item.name}
			</a>
		</li>
	));

	return (
		<nav className='bg-white w-full h-full shadow-2xl'>
			<ul className='capitalize text-center h-full flex flex-col items-center justify-center gap-y-5 text-xl font-medium'>
				{navItems}
			</ul>
		</nav>
	);
};

export default NavMobile;
