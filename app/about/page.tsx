"use client"
import Link from "next/link";
import { Navigation } from "../components/nav";
import Image from "next/image";  // 追加

export default function About() {
    return (
        <div className="w-screen h-full bg-gradient-to-tr to-blue-500 from-blue-400">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                        About Me
                    </h2>
                    <p className="mt-4 text-zinc-200 text-xl">
                        Hiroshi Takagi alias keccap256
                    </p>
                    <Image
                        src="/images/me.JPG"
                        alt="My Image"
                        width={500}
                        height={500}
                        className="mt-8 mx-auto rounded-lg"
                    />
                </div>

                {/* 章立て開始 */}
                <div className="w-full h-px bg-zinc-400" />

                {/* キャリア */}
                <section>
                    <h3 className="text-3xl font-semibold text-zinc-100">Career</h3>
                    <p className="mt-2 text-zinc-200 text-lg">
                        I started my journey in technology from a young age, fascinated by the endless possibilities it provides. Over the years, I've worked as a software engineer, specializing in full-stack development, blockchain technologies, and scalable cloud architectures.
                    </p>
                </section>

                {/* スキル */}
                <section className="mt-8">
                    <h3 className="text-3xl font-semibold text-zinc-100">Skills</h3>
                    <ul className="mt-2 space-y-2 text-lg text-zinc-200">
                        <li><span className="font-bold">Languages:</span> TypeScript, Go, Solidity, Rust</li>
                        <li><span className="font-bold">Technologies:</span> AWS, Docker, Kubernetes, Next.js</li>
                        <li><span className="font-bold">Blockchain:</span> Ethereum, Hyperledger Besu, Cosmos, IBC, Solidity Smart Contracts</li>
                    </ul>
                </section>

                {/* 趣味 */}
                <section className="mt-8">
                    <h3 className="text-3xl font-semibold text-zinc-100">Hobbies</h3>
                    <p className="mt-2 text-zinc-200 text-lg">
                        When I'm not coding, I enjoy unwinding by exploring the endless humor and creativity found on Reddit. Whether it's clever memes or insightful discussions, I find it to be a great way to relax and stay connected with online culture.
                    </p>
                </section>

                {/* ビジョン(仮) */}
                <section className="mt-8">
                    <h3 className="text-3xl font-semibold text-zinc-100">Vision</h3>
                    <p className="mt-2 text-zinc-200 text-lg">
                        My ultimate goal is to innovate in the tech space by solving real-world problems with efficient and scalable solutions. I'm always looking for ways to bridge the gap between emerging technologies and their practical applications.
                    </p>
                </section>

                <div className="w-full h-px bg-zinc-400" />

                {/* クオートとイメージ */}
                <div className="mt-8">
                    <p className="text-center text-zinc-100 text-base italic">
                        "You know, I'm something of a software engineer myself."
                    </p>
                    <Image
                        src="/memes/somethingOf.jpg"
                        alt="My Image"
                        width={500}
                        height={500}
                        className="mt-8 mx-auto rounded-lg"
                    />
                </div>
            </div>

            {/* フッター */}
            <footer className="mt-16 py-8">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-zinc-200 text-sm">
                        © 2023 Hiroshi Takagi. All rights reserved.
                    </p>
                    <div className="flex justify-center mt-4 space-x-6">
                        <a href="#" className="text-zinc-200 hover:text-white">Twitter</a>
                        <a href="#" className="text-zinc-200 hover:text-white">GitHub</a>
                        <a href="#" className="text-zinc-200 hover:text-white">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
