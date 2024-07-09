import React from "react";
import { OverviewHeader, Pending } from "@/app/components/overviewData/OverviewData";
import "../Overview.scss";

const VerificationPending = () => {
	return (
		<div>
			<div className="bg"></div>
			<div className="relative mx-auto">
				<OverviewHeader />
				<div className="relative flex mt-[49px]">
					<Pending />
				</div>
			</div>
		</div>
	);
};

export default VerificationPending;
