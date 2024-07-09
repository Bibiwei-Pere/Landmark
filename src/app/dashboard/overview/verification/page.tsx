import React from "react";
import { OverviewHeader, Steps, VerificationSetup } from "@/app/components/overviewData/OverviewData";
import "../Overview.scss";

const Verification = () => {
	const verificationSetupData = {
		step: "Step 4 of 5",
		title: "Verification Setup",
		text: "Complete the verification process by providing necessary documentation and information. This step is crucial to ensure the legitimacy of your business, build trust with customers, and comply with regulatory requirements.",
	};
	return (
		<div>
			<div className="bg"></div>
			<div className="relative mx-auto">
				<OverviewHeader />
				<div className="relative flex mt-[49px]">
					<div className="subWrapper">
						<Steps data={verificationSetupData} />
					</div>
					<VerificationSetup />
				</div>
			</div>
		</div>
	);
};

export default Verification;
