import React from "react";
import Logo from "../assets/images/OyoyoWhite.svg";
import "./Footer.scss";
import Image from "next/image";
import Googlestore from "../assets/images/Googlestore.svg";
import Appstore from "../assets/images/Appstore.svg";
import Link from "next/link";
import { FacebookIcon, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
	return (
		<div className="footer">
			<section className="bg">
				<div className="container">
					<div className="wrapper1">
						<Image src={Logo} alt="Logo" />
						<p>A user-friendly platform for event planning and streaming .</p>
						<div>
							<Link href="/">Home</Link>
							<Link href="/">Tutorial</Link>
							<Link href="/">Get the app</Link>
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
	);
};

export default Footer;
