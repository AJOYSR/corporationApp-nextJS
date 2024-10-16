import Hero from "@/components/hero";
import React from "react";
import reliabilityImage from "../../../public/reliability.jpg";

const ReliabilityPage = () => {
	return (
		<div>
			<Hero
				imageAlt="welding"
				imageData={reliabilityImage}
				title="Super high reliability hosting"
			/>
		</div>
	);
};

export default ReliabilityPage;
