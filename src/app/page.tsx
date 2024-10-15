import Hero from "@/components/hero";
import React from "react";
import heroImage from "../../public/car.jpg";
const Home = () => {
	return (
		<Hero
			imageAlt="car factory"
			imageData={heroImage}
			title="Professional Cloud hosting"
		/>
	);
};

export default Home;
