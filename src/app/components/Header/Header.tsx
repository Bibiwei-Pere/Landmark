"use client";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import Link from "next/link";
import { navContent2 } from "../assets/data/Components";
import Hamburger from "../assets/images/icon-hamburger.svg";
import Close from "../assets/images/icon-close.svg";
import Logo from "../assets/images/Oyoyo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
	const [scroll, setScroll] = useState(false);
	const [activeMenu, setActiveMenu] = useState("");
	const handleMenu = () => {
		setActiveMenu("active");
	};
	const handleClose = () => {
		setActiveMenu("");
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	return (
		<div className={`header ${scroll ? "scroll" : ""}`}>
			<div className="container">
				<div className="logo">
					<Image src={Logo} alt="Logo" />
				</div>
				<ul className="navContent">
					{navContent2.map((item, index) => (
						<Link key={index} href={item.url}>
							{item.title}
						</Link>
					))}
				</ul>
				<Link href="waitlist" className="getInTouch">
					<Button>Join waitlist</Button>
				</Link>
				{/* MOBILE MENU */}
				<div className={`mobileMenu ${activeMenu}`}>
					<div className="hamburger" onClick={handleMenu}>
						<Image src={Hamburger} alt="Hamburger" onClick={handleClose} />
					</div>
					<Image src={Close} alt="Close" className="close" onClick={handleClose} />
					<div className="navContent">
						{navContent2.map((item, index) => {
							return (
								<Link key={index} href={item.url}>
									{item.title}
								</Link>
							);
						})}
						<Link href="waitlist" className="getInTouchMobile">
							Join waitlist
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
