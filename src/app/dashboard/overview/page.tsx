import { ListService, OverviewHeader, Steps } from "@/app/components/overviewData/OverviewData";
import React from "react";
import "./Overview.scss";

const Overview = () => {
	const listProductData = {
		step: "Step 1 of 5",
		title: "List a Service",
		text: "Add your first product to Oyoyo by providing a detailed description, uploading high-quality photos, and setting the right pricing. This will be the cornerstone of your online store.",
	};

	return (
		<>
			<div className="bg"></div>

			<div className="relative mx-auto">
				<OverviewHeader />
				<div className="relative flex mt-[49px]">
					<div className="subWrapper">
						<Steps data={listProductData} />
					</div>
					<ListService />
				</div>
			</div>
		</>
	);
};

export default Overview;
