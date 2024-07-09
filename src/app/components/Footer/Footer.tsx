import React from "react";
import Logo from "../assets/images/Oyoyo.svg";
import "./Footer.scss";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="footer">
			<div className="logo">
				<Image src={Logo} alt="Logo" />
			</div>
			<p>Copyright 2023 Lassod Consulting</p>
		</div>
	);
};

export default Footer;
