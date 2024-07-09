import React from "react";
import Add from "../../assets/images/Add.jpg";
import Video from "../../assets/images/Video player.svg";
import "./Tutorial.scss";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Tutorial = () => {
	return (
		<section className="tutorial">
			<div className="title">
				<h3>Tutorial</h3>
				<h2>How to view an event stream</h2>
				<p>Check out our step-by-step walkthrough video on how to view a live event stream on Oyoyo Events App.</p>
			</div>
			<div className="videos">
				<Image src={Video} alt="Video" />
				<Button className="btn max-w-[390px]">Get early access</Button>
			</div>
		</section>
	);
};

export default Tutorial;
