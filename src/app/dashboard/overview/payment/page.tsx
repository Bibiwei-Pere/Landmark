import React from "react";
import { OverviewHeader, Steps, PaymentSetup } from "@/app/components/overviewData/OverviewData";
import "../Overview.scss";

const Payment = () => {
	const paymentSetupData = {
		step: "Step 3 of 5",
		title: "Payment Setup",
		text: "Configure your preferred payment methods to ensure smooth and secure transactions. Add your banking details, and set up payment preferences to provide flexibility for your customers.",
	};
	return (
		<div>
			<div className="bg"></div>
			<div className="relative mx-auto">
				<OverviewHeader />
				<div className="relative flex mt-[49px]">
					<div className="subWrapper">
						<Steps data={paymentSetupData} />
					</div>
					<PaymentSetup />
				</div>
			</div>
		</div>
	);
};

export default Payment;
