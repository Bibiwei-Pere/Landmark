import React from "react";
import "./About.scss";
import Image from "next/image";
import Firework from "../../assets/images/Fireworks.jpg";
import Link from "next/link";

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<span>ABOUT US</span>
				<div>
					<h2>OYOYO is an ecosystem developed by Lassod Consulting</h2>
					<p>At Lassod Consulting Limited, we pride ourselves on upholding the highest standards of professionalism and a strong work ethic in all our interactions. Empathy is one value that sets us apart. We understand that every business presents its unique challenge and aspirations. We listen and we then aim to provide tailored solutions that truly address our clients’ needs. We believe in conducting ourselves with honesty and we value trust and strive to build strong, long-term relationships with our clients and partners. With a focus on continuous improvement, we set high standards for ourselves and consistently seek to exceed expectations.</p>
					<Link href="#">Find Out More</Link>
				</div>
			</div>
			<Image src={Firework} alt="Firework" className="fireworks" />
		</section>
	);
};

export default About;
