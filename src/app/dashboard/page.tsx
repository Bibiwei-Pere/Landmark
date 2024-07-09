import React from "react";
import Plus from "../components/assets/images/plus.svg";
import "./Dashboard.scss";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
	return (
		<div className="overview">
			<h2>Dashboard Setup</h2>
			<p>Set up your dashboard to start selling on oyoyo.</p>

			<div className="wrapper">
				<h3>List a product</h3>
				<p>Upload and setup your first product.</p>
				<span>
					<Image className="plus" src={Plus} alt="Plus" />
					<h2>Add your first product</h2>
					<p>Write a description, add photos, and set pricing for the products you plan to sell.</p>
					<Link href="dashboard/overview">Add product</Link>
				</span>
			</div>

			<section>
				<p>Set up your online store</p>
				<Image src={Plus} alt="Plus" />
			</section>
			<section>
				<p>Set up payment method</p>
				<Image src={Plus} alt="Plus" />
			</section>
			<section>
				<p>Set up verification details</p>
				<Image src={Plus} alt="Plus" />
			</section>
			<section>
				<p>Launch your online store</p>
				<Image src={Plus} alt="Plus" />
			</section>
		</div>
	);
};

export default Dashboard;
