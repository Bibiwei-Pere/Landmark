"use client";
import React, { useEffect, useState } from "react";
import "./components/Header/Header.scss";
import Link from "next/link";
import Hamburger from "./components/assets/images/icon-hamburger.svg";
import Close from "./components/assets/images/icon-close.svg";
import Logo from "./components/assets/images/Oyoyo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import Download from "./components/landing/download/Download";
import Expect from "./components/landing/Expect/Expect";
import Hero from "./components/landing/Hero/Hero";
import Tutorial from "./components/landing/Tutorial/Tutorial";
import { navContent } from "./components/assets/data/Components";

export default function Home() {
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
		<main>
			<div className={`header ${scroll ? "scroll" : ""}`}>
				<div className="container">
					<div className="logo">
						<Image src={Logo} alt="Logo" />
					</div>
					<ul className="navContent">
						{navContent.map((item, index) => (
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
							{navContent.map((item, index) => {
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
			<Hero />
			<Expect />
			<div id="tutorial">
				<Tutorial />
			</div>
			<div id="app">
				<Download />
			</div>
			<Footer />
		</main>
	);
}
