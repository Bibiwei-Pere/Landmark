import Image from "next/image";
import "./Question.scss";
import React from "react";
import Footer1 from "../../assets/images/Footer1.jpg";
import Link from "next/link";

const Question = () => {
	return (
		<section className="question">
			<div className="img">
				<Image src={Footer1} alt="Footer1" className="footer1" />
			</div>
			<div className="container">
				<h1>QUESTIONS?</h1>
				<span>Kindly get in touch with us with your questions</span>
				<Link href="#">Contact Us Today</Link>
			</div>
		</section>
	);
};

export default Question;
