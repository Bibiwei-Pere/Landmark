import React from "react";
import "./Expect.scss";
import Image from "next/image";
import chess1 from "../../assets/images/chess2.svg";
import chess2 from "../../assets/images/chess1.svg";
import { CheckCircle, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const Expect = () => {
	return (
		<section className="expect">
			<div className="title">
				<h3>What to expect</h3>
				<h2>The Landmark Chess week</h2>
				<p>Experience the energy of Live events from anywhere with the Oyoyo Events App</p>
			</div>
			<div className="container">
				<div className="wrapper1">
					<b className="mb-4 w-9 bg-red-50 text-red-700 p-1.5 rounded-[50%]">
						<ThumbsUpIcon />
					</b>
					<h2>Live Streaming Benefits</h2>
					<p className="my-1">Don’t miss a single move - Stream Landmark Chess Week Live.</p>
					<div>
						<span className="flex gap-2">
							<CheckCircle className="text-red-700 h-[23.3px] max-w-[23.3px] w-full" />
							<p>Experience events live from the comfort of your home.</p>
						</span>
						<span className="flex gap-2">
							<CheckCircle className="text-red-700 h-[23.3px] max-w-[23.3px] w-full" />
							<p>Engage with the event through comments and reactions</p>
						</span>
						<span className="flex gap-2">
							<CheckCircle className="text-red-700 h-[23.3px] max-w-[23.3px] w-full" />
							<p>Learn new chess strategies from the comfort of your home</p>
						</span>
						<span className="flex gap-2">
							<CheckCircle className="text-red-700 h-[23.3px] max-w-[23.3px] w-full" />
							<p>Be a part of the action - it’s FREE</p>
						</span>
					</div>
				</div>
				<div className="wrapper2">
					<Image src={chess1} alt="Phone" className="phone" />
				</div>
			</div>
			<div className="container">
				<div className="wrapper2">
					<Image src={chess2} alt="Phone" className="phone" />
				</div>
				<div className="wrapper1">
					<b className="mb-4 w-9 bg-red-50 text-red-700 p-1.5 rounded-[50%]">
						<ThumbsUpIcon />
					</b>
					<h2>Be the first to be reminded</h2>
					<p className="my-1">Get our user friendly app for a seamless event planning and streaming experience.</p>
					<div className="pl-4">
						<span className="flex gap-2">
							<CheckCircle className="text-red-700 h-[23.3px] max-w-[23.3px] w-full" />
							<p>Download the Oyoyo Events App Today</p>
						</span>
						<span className="flex gap-2">
							<CheckCircle className="text-red-700 h-[23.3px] max-w-[23.3px] w-full" />
							<p>
								To get reminders about this event and many more exciting events coming your way.{" "}
								<Link className="text-red-700" href="#">
									Join waitlist
								</Link>
							</p>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Expect;
