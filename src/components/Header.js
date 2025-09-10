/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
import NavMobile from "./NavMobile";

const Header = () => {
	const [bg, setBg] = useState(false);
	const [mobileNav, setMobileNav] = useState(false);

	// Conditional Elements | Styling |:
	const bgStyle = bg ? "bg-primary py-4 lg:py-6" : "bg-none";
	const mobileNavMenu = mobileNav ? <CgClose /> : <CgMenuRight />;
	const mobileNavMenuStyle = mobileNav ? "left-0" : "-left-full";
	const navItems = navigation.map((item, index) => (
		<li key={index}>
			<a
				href={item.href}
				className={`text-white capitalize hover:border-b transition-all`}
			>
				{item.name}
			</a>
		</li>
	));

	// Controlling the Scrolling Effect:
	useEffect(() => {
		document.addEventListener("scroll", () =>
			window.scrollY > 50 ? setBg(true) : setBg(false)
		);
	});

	return (
		<section
			className={`${bgStyle} fixed w-full left-0 py-8 z-10 transition-all duration-200`}
		>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center'>
					<a href='#'>
						<img src={Logo} alt='Brand Logo' className='h-6 lg:h-8' />
					</a>
					<div
						onClick={() => setMobileNav(!mobileNav)}
						className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'
					>
						{mobileNavMenu}
					</div>
					{/* Nav Desktop + Tablet */}
					<nav className='hidden md:flex'>
						<ul className='flex md:gap-x-12'>{navItems}</ul>
					</nav>
					{/* Nav Mobile */}
					<section
						className={`${mobileNavMenuStyle} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
					>
						<NavMobile />
					</section>
				</div>
			</div>
		</section>
	);
};

export default Header;
