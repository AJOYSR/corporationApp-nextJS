import Image, { StaticImageData } from "next/image";
import React from "react";
interface HeroProps {
	imageData: StaticImageData;
	imageAlt: string;
	title: string;
}
const Hero = (props: HeroProps) => {
	return (
		<div className="relative h-screen">
			<div className="absolute -z-10 inset-0">
				<Image
					alt={props.imageAlt}
					src={props.imageData}
					fill
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="pt-48 flex justify-center items-center">
				<h1 className="text-white text-8xl">{props.title}</h1>
			</div>
		</div>
	);
};

export default Hero;
