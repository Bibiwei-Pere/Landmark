import React from "react";
import { ShopSetup, OverviewHeader, Steps } from "@/app/components/overviewData/OverviewData";
import "../Overview.scss";

const Shop = () => {
	const shopSetupData = {
		step: "Step 2 of 5",
		title: "Shop Setup",
		text: "Personalize your store to reflect your brand. Add your store name, upload a logo, and create an engaging store description to attract customers. Make sure your store stands out with a unique and professional appearance.",
	};
	return (
		<div>
			<div className="bg"></div>
			<div className="relative mx-auto">
				<OverviewHeader />
				<div className="relative flex mt-[49px]">
					<div className="subWrapper">
						<Steps data={shopSetupData} />
					</div>
					<ShopSetup />
				</div>
			</div>
		</div>
	);
};

export default Shop;
