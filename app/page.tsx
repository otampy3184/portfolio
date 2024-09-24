import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
	{ name: "About", href: "/about" },
];

export default function Home() {
	return (
		<div className="w-screen h-max bg-image">
			<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
				<nav className="my-16 animate-fade-in">
					<ul className="flex items-center justify-center gap-4">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-lg duration-500  text-white hover:text-zinc-500"
							>
								{item.name}
							</Link>
						))}
					</ul>
				</nav>
				{/* <Particles
					className="absolute inset-0 -z-10 animate-fade-in"
					quantity={100}
				/> */}
				<div className="w-max max-w-full px-4">
					<h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-9 text-2xl sm:text-3xl text-white font-bold text-center">
						Put something inspiring here.
					</h1>
				</div>
				<div className="my-16 text-center animate-fade-in">
					<h2 className="text-base text-white ">
						This is my so-called ✌Portfolio✌ website. {" "}

						<br />
						Welcome, and have a nice day.{" "}
					</h2>
				</div>
			</div>
		</div>
	);
}
