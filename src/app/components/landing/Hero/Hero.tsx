import Image from "next/image";
import "./Hero.scss";
import React from "react";
import Add from "../../assets/images/Add.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<div className="heroContainer">
			<section className="bg">
				<div className="img"></div>
				<div className="hero">
					<h1>Livestream The Landmark Chess Week</h1>
					<p>Can't make it in person? No problem! Stream the event LIVE exclusively on the Oyoyo Events App!</p>
					<Button className="max-w-[142px]">Get early access</Button>
					<div className="video">
						<Image src={Add} alt="Add" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
