"use client"
import Link from "next/link";
import { Navigation } from "../components/nav";

export default function About() {
    return (
        <div className="w-screen h-screen bg-gradient-to-tr to-blue-500 from-green-500">
            <Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						About me
					</h2>
					<p className="mt-4 text-zinc-200 text-xl">
					About me
					</p>
				</div>
				<div className="w-full h-px bg-zinc-400" />
                <p className="mt-4 text-zinc-100 text-base">
					京都在住のソフトウェアエンジニアです
				</p>
            </div>
        </div>
    )
}