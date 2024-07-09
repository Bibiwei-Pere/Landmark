"use client";
import React, { useEffect, useState } from "react";
import "./components/Header/Header.scss";
import Link from "next/link";
import Hamburger from "./components/assets/images/icon-hamburger.svg";
import Close from "./components/assets/images/icon-close.svg";
import Logo from "./components/assets/images/Oyoyo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Download from "./components/landing/download/Download";
import Expect from "./components/landing/Expect/Expect";
import Hero from "./components/landing/Hero/Hero";
import Tutorial from "./components/landing/Tutorial/Tutorial";
import { navContent } from "./components/assets/data/Components";
import Logo2 from "./components/assets/images/OyoyoWhite.svg";
import "./components/Footer/Footer.scss";
import Googlestore from "./components/assets/images/Googlestore.svg";
import Appstore from "./components/assets/images/Appstore.svg";
import { FacebookIcon, Instagram, Linkedin } from "lucide-react";

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

			<div className="footer">
				<section className="bg">
					<div className="container">
						<div className="wrapper1">
							<Image src={Logo2} alt="Logo2" />
							<p>A user-friendly platform for event planning and streaming .</p>
							<div>
								<Link href="/">Home</Link>
								<Link href="#tutorial">Tutorial</Link>
								<Link href="#app">Get the app</Link>
							</div>
						</div>
						<div className="wrapper2">
							<h3>Get the app</h3>
							<Image src={Appstore} alt="Appstore" />
							<Image src={Googlestore} alt="Googlestore" />
						</div>
					</div>
					<div className="wrapper">
						<p>© 2024 Oyoyo events. All rights reserved.</p>
						<div>
							<Link href="#">
								<Linkedin className="text-white" />
							</Link>
							<Link href="#">
								<FacebookIcon className="text-white" />
							</Link>
							<Link href="#">
								<Instagram className="text-white" />
							</Link>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
