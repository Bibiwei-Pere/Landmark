import Image from "next/image";
import "./Download.scss";
import React from "react";
import Googlestore from "../../assets/images/Googlestore.svg";
import Appstore from "../../assets/images/Appstore.svg";
import Iphone12 from "../../assets/images/Iphone12.png";
import Iphone13 from "../../assets/images/Iphone13.png";

const Download = () => {
	return (
		<div className="downloadContainer">
			<section className="bg">
				<div className="img"></div>
				<div className="container">
					<div className="wrapper1">
						<h2>Download the Oyoyo Events App Today!</h2>
						<p>Navigate our user-friendly app for seamless event planning and streaming.</p>
						<div className="store">
							<Image src={Appstore} alt="Appstore" />
							<Image src={Googlestore} alt="Googlestore" />
						</div>
					</div>
					<div className="wrapper2">
						<Image src={Iphone12} alt="Iphone12" />
						<Image src={Iphone13} alt="Iphone13" className="phone" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Download;
