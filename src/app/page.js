"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { GithubIcon, Linkedin, PhoneCall, Mail } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 3500,
    })
  );

  const pauseAutoplay = () => {
    autoplayRef.current.stop();
    clearTimeout(autoplayRef.current.resumeTimeout);

    autoplayRef.current.resumeTimeout = setTimeout(() => {
      autoplayRef.current.play();
    }, 5500);
  };

  return (
    <div className="grid grid-col-2 md:grid-col-3 lg:grid-col-3 flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-between text-center mt-6">
        <h1 className="text-5xl font-bold">Joshua Degg</h1>
        <hr className="my-2 border-t border-gray-300 w-35 mx-auto" />
        <p className="text-muted-foreground">Software Developer</p>
      </div>
      <section className="flex items-center w-full max-w-4xl mx-auto px-4 py-2 space-x-4 mt-10">
        <div>
          <img
            src="https://i.ibb.co/Xg5FWSm/Profes-pfp.png"
            alt="Joshua's Profile Picture"
            className="w-48 h-48 mx-auto rounded-full border-2 mr-2"
          />
          <div className="flex justify-center gap-2 mt-4">
            <HoverCard className="">
              <HoverCardTrigger>
                <GithubIcon />
              </HoverCardTrigger>
              <HoverCardContent className="text-center">
                <Link
                  href="https://github.com/JDC-droid"
                  className="hover:text-blue-500 hover:underline"
                >
                  Github
                </Link>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Linkedin />
              </HoverCardTrigger>
              <HoverCardContent className="text-center">
                <Link
                  href="https://www.linkedin.com/in/joshua-degg-a174b7296/"
                  className="hover:text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <PhoneCall />
              </HoverCardTrigger>
              <HoverCardContent className="text-center">
                <p>Phone Number: 07853532947</p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Mail />
              </HoverCardTrigger>
              <HoverCardContent className="text-center">
                <p>Email: josh040890@gmail.com</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <Card className="shadow-md bg-background border rounded-xl p-6">
            <CardHeader className="text-3xl text-center font-bold">
              My skills 🏆
            </CardHeader>
            <hr className="my-2 border-t border-gray-300 w-35 mx-auto -mb-5 -mt-5" />
            <CardContent>
              <ul className="flex flex-col justify-between mx-auto text-lg text-center h-65">
                <li className="flex justify-between mx-auto">Javascript </li>
                <li className="flex justify-between mx-auto">
                  HTML{" "}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
                  </svg>
                </li>
                <li className="flex justify-between mx-auto">CSS</li>
                <li>Tailwind CSS</li>
                <li>Next.js (basics)</li>
                <li>Node.js (basics)</li>
                <li>React (basics)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <h1 className="text-3xl text-center font-bold underline decoration-2 mb-4 mt-10">
        My Projects 🌱
      </h1>
      <section className=" w-full max-w-4xl mx-auto px-4 py-2 mt-10">
        <Carousel
          orientation="vertical"
          className="w-full max-w-2xl mx-auto px-6"
          plugins={[autoplayRef.current]}
        >
          <CarouselContent className="flex flex-col items-center snap-y snap-mandatory h-[380px]">

            <CarouselItem className="flex justify-center w-full pl-4 snap-start">
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-muted rounded-lg p-3">
                    <img
                      src="https://i.ibb.co/P2mC5Kz/Screenshot-2025-06-29-224139.png"
                      alt="Zajaik Webpage Screenshot"
                      className="w-30 h-30 text-primary rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <CardTitle className="text-xl font-semibold text-center">
                      Zajaik
                    </CardTitle>
                    <CardContent className="flex flex-col text-muted-foreground text-sm text-center p-0">
                      <p className="text-base">Links:</p>
                      <Link
                        href="https://zajaik.com/"
                        className="hover:text-blue-500 hover:underline"
                      >
                        Zajaik.com
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full pl-4">
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6">
                <div className="bg-muted rounded-lg p-3">
                  <img
                    src="https://i.ibb.co/spfkkTw1/Screenshot-2025-04-29-154323.png"
                    alt="Text-Adventure Game Screenshot"
                    className="w-30 h-30 text-primary rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl font-semibold text-center">
                    Text Adventure Game
                  </CardTitle>
                  <CardContent className="flex flex-col text-muted-foreground text-sm text-center p-0">
                    <p className="text-base">Links:</p>
                    <Link
                      href="https://jdc-droid.github.io/Text-Adventure-Game/"
                      className="hover:text-blue-500 hover:underline"
                    >
                      Text-Adventure Webpage
                    </Link>
                    <Link
                      href="https://github.com/JDC-droid/Text-Adventure-Game"
                      className="hover:text-blue-500 hover:underline"
                    >
                      Github Repository
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full pl-4">
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6">
                <div className="bg-muted rounded-lg p-3">
                  <img
                    src="https://i.ibb.co/C3XwZ7WS/Screenshot-2025-06-30-015438.png"
                    alt="Caesar Cipher Screenshot"
                    className="w-30 h-30 text-primary rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl font-semibold text-center">
                    Caesar Cipher
                  </CardTitle>
                  <CardContent className="flex flex-col text-muted-foreground text-sm text-center p-0">
                    <p className="text-base">Links:</p>
                    <Link
                      href="https://jdc-droid.github.io/Tester-Caesar-Cipher/"
                      className="hover:text-blue-500 hover:underline"
                    >
                      Caesar Cipher Webpage
                    </Link>
                    <Link
                      href="https://github.com/JDC-droid/Tester-Caesar-Cipher"
                      className="hover:text-blue-500 hover:underline"
                    >
                      Github Repository
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full pl-4">
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6">
                <div className="bg-muted rounded-lg p-3">
                  <img
                    src="https://i.ibb.co/ynxL1rxW/Screenshot-2025-04-29-154425.png"
                    alt="Calculator Screenshot"
                    className="w-30 h-30 text-primary rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl font-semibold text-center">
                    Calculator
                  </CardTitle>
                  <CardContent className="flex flex-col text-muted-foreground text-sm text-center p-0">
                    <p className="text-base">Links:</p>
                    <Link
                      href="https://jdc-droid.github.io/Calculator-Project/"
                      className="hover:text-blue-500 hover:underline"
                    >
                      Calculator Webpage
                    </Link>
                    <Link
                      href="https://github.com/JDC-droid/Calculator-Project"
                      className="hover:text-blue-500 hover:underline"
                    >
                      Github Repository
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full pl-4">
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6">
                <div className="bg-muted rounded-full p-3">
                  <img
                    src="https://i.ibb.co/Dfp0JW4f/Screenshot-2025-06-30-064631.png"
                    alt="JDC-pfp"
                    className="w-30 h-30 text-primary rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl font-semibold text-center">
                    Find more on my github
                  </CardTitle>
                  <CardContent className="text-muted-foreground text-sm text-center p-0">
                    <p className="text-base">Link:</p>
                    <Link
                      href="https://github.com/JDC-droid"
                      className="hover:text-blue-500 hover:underline"
                    >
                      Github Profile
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
          
          <div onClick={pauseAutoplay} className="flex-items-center">
            
            <CarouselPrevious />
          </div>
          <div onClick={pauseAutoplay} className="flex-items-center">
            <CarouselNext />
          </div>
          
        </Carousel>
      </section>
      <section className="w-full max-w-4xl mx-auto px-4 py-2 mt-20 mb-10">
        <div className="space-y-6">
          <Card className="shadow-md bg-background border rounded-lg p-6">
            <CardHeader>
              <h2 className="text-2xl text-center font-bold">Meet Me 🎙️</h2>
            </CardHeader>
            <hr className="my-2 border-t border-gray-300 w-25 mx-auto -mb-2 -mt-5" />
            <CardContent>
              <p className="text-[11px] text-center pb-4">
                I am a Junior Software Developer that is passionate about
                gaining knowledge for coding through self taught methods.
                <br />
                <br />I wish to aim myself more in the direction of back-end
                development however I do wish to learn a lot more about
                front-end as well, as I have a life goal to eventually become a
                self-employed full-stack developer desiring to continue this
                passion well into the future.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
