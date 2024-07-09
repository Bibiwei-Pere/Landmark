import React from "react";
import { OverviewHeader, Steps, LaunchStore } from "@/app/components/overviewData/OverviewData";
import "../Overview.scss";

const Launch = () => {
	const launchStoreData = {
		step: "Step 5 of 5",
		title: "Launch Online Store",
		text: "You are almost ready to launch! Review all the details, make any final adjustments, and then hit the launch button. Once live, your store will be accessible to customers, and you can start making sales.",
	};
	return (
		<div>
			<div className="bg"></div>
			<div className="relative mx-auto">
				<OverviewHeader />
				<div className="relative flex mt-[49px]">
					<div className="subWrapper">
						<Steps data={launchStoreData} />
					</div>
					<LaunchStore />
				</div>
			</div>
		</div>
	);
};

export default Launch;
