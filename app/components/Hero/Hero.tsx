import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="relative">
            <div className="hero h-[calc(80vh-5rem)] relative border-b-[1px] border-[var(--accent-color)] scroll-snap-align-[start]">
                <div className="imagewrapper absolute w-full h-[80%]">
                    <Image
                        src="/hogwarts.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="Hero Section Background Image"
                    />
                </div>
                <div className="herogradient absolute w-full h-full bg-gradient-to-r from-[var(--darkest-color)] via-[transparent]">
                    <div className="herotext flex justify-start items-center h-full max-w-[1400px] mx-auto">
                        <div className="w-[40%] text-start font-light pl-[3rem]">
                            <h1 className="text-[3rem] text-white text-transform-[capitalize]">
                                Enter the Wizarding World: Unleash Your Inner Hero with
                                Harry Potter
                            </h1>
                            <p className="text-[1.4rem] text-white">
                                Discover your magical potential and embark on an
                                unforgettable adventure
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
