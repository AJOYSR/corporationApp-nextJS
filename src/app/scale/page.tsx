import Hero from "@/components/hero";
import React from "react";
import scaleImage from "../../../public/scale.jpg";

const ReliabilityPage = () => {
	return (
		<div>
			<Hero
				imageAlt="steel factory"
				imageData={scaleImage}
				title="Scale your app to infinity"
			/>
		</div>
	);
};

export default ReliabilityPage;
