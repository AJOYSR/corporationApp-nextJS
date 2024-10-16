import Hero from "@/components/hero";
import React from "react";
import performanceImage from "../../../public/performance.jpg";

const PerformancePage = () => {
	return (
		<div>
			<Hero
				imageAlt="welding"
				imageData={performanceImage}
				title="We provide high performance applications"
			/>
		</div>
	);
};

export default PerformancePage;
