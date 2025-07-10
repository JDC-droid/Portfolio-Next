"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";
import { useRef, useEffect } from "react";
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
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="grid grid-col-2 md:grid-col-3 lg:grid-col-3 flex justify-center items-center min-h-screen bg-secondary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="flex flex-col justify-between text-center mx-auto w-107 p-5 mt-6 bg-primary rounded-lg shadow-lg">
          <h1 className="text-5xl text-[#12151c] font-bold">Joshua Degg</h1>
          <p className="text-secondary">Software Developer</p>
        </div>
      </motion.div>
      <section className="flex items-center w-full max-w-4xl mx-auto px-4 py-2 space-x-4 mt-10">
        <div>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 1.2 }}
            src="https://i.ibb.co/xkgBvLF/Copy-of-Profes-pfp.png"
            alt="Joshua's Profile Picture"
            className="w-48 h-48 mx-auto rounded-full border-3 border-primary mr-2"
          />
          <div className="flex justify-center gap-2 mt-4 pr-2">
            <HoverCard className="">
              <HoverCardTrigger>
                <GithubIcon className="hover:text-blue-500 hover:scale-125" />
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
                <Linkedin className="hover:text-blue-500 hover:scale-125" />
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
                <PhoneCall className="hover:text-blue-500 hover:scale-125" />
              </HoverCardTrigger>
              <HoverCardContent className="text-center">
                <p>Phone Number: 07853532947</p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Mail className="hover:text-blue-500 hover:scale-125" />
              </HoverCardTrigger>
              <HoverCardContent className="text-center">
                <p>Email: josh040890@gmail.com</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="flex-1 space-y-6"
        >
          <Card className="shadow-md bg-secondary border rounded-xl p-6 text-[#12151c]">
            <CardHeader className="text-3xl text-center font-bold">
              My skills 🏆
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col justify-between mx-auto text-lg text-center h-65">
                <li className="flex justify-between mx-auto">
                  Javascript{" "}
                  <svg
                    className="pl-1 w-6 h-6 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#000000"
                      d="M1.408 1.408h125.184v125.185H1.408z"
                    />

                    <path
                      fill="#ffffff"
                      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    />
                  </svg>
                </li>
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
                <li className="flex justify-between mx-auto">
                  CSS{" "}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
                  </svg>
                </li>

                <li className="flex justify-between mx-auto">
                  Tailwind CSS{" "}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
                  </svg>
                </li>
                <li className="flex justify-between mx-auto">
                  Next.js (basics){" "}
                  <svg
                    className="pl-1 w-6 h-6 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                  </svg>
                </li>
                <li className="flex justify-between mx-auto">
                  Node.js (basics){" "}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#000000"
                      d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    />
                  </svg>
                </li>
                <li className="flex justify-between mx-auto">
                  React (basics){" "}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
                    <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
                  </svg>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>
      <h1 className="text-3xl text-center text-[#12151c] font-bold mb-4 mt-10">
        My Projects 🌱
      </h1>
      <section className=" w-full max-w-4xl mx-auto px-4 py-2 mt-10">
        <Carousel
          orientation="vertical"
          className="relative w-full mx-auto"
          plugins={[autoplayRef.current]}
        >
          <CarouselContent className="flex flex-col items-center snap-y snap-mandatory h-[420px] pr-6">
            <CarouselItem className="flex justify-center w-full snap-start">
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6 bg-secondary">
                <div className="bg-primary rounded-lg p-1">
                  <img
                    src="https://i.ibb.co/P2mC5Kz/Screenshot-2025-06-29-224139.png"
                    alt="Zajaik Webpage Screenshot"
                    className="w-30 h-30 text-primary rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl text-[#12151c] font-semibold text-center ">
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
              </Card>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full pl-4 ">
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6 bg-secondary">
                <div className="bg-primary rounded-lg p-1">
                  <img
                    src="https://i.ibb.co/spfkkTw1/Screenshot-2025-04-29-154323.png"
                    alt="Text-Adventure Game Screenshot"
                    className="w-30 h-30 text-primary rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl text-[#12151c] font-semibold text-center">
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
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6 bg-secondary">
                <div className="bg-primary rounded-lg p-1">
                  <img
                    src="https://i.ibb.co/C3XwZ7WS/Screenshot-2025-06-30-015438.png"
                    alt="Caesar Cipher Screenshot"
                    className="w-30 h-30 text-primary rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl text-[#12151c] font-semibold text-center">
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
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6 bg-secondary">
                <div className="bg-primary rounded-lg p-1">
                  <img
                    src="https://i.ibb.co/ynxL1rxW/Screenshot-2025-04-29-154425.png"
                    alt="Calculator Screenshot"
                    className="w-30 h-30 text-primary rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl text-[#12151c] font-semibold text-center">
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
              <Card className="p-8 text-center shadow-md border border-border rounded-full flex flex-col items-center justify-between w-full max-w-md gap-y-6 bg-secondary">
                <div className="bg-primary rounded-lg p-1">
                  <img
                    src="https://i.ibb.co/Dfp0JW4f/Screenshot-2025-06-30-064631.png"
                    alt="JDC-pfp"
                    className="w-30 h-30 text-primary rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl text-[#12151c] font-semibold text-center">
                    Find more on my github
                  </CardTitle>
                  <CardContent className="text-muted-foreground text-sm text-center p-0">
                    <p className="text-xl">Link:</p>
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

          <div onClick={pauseAutoplay}>
            <CarouselPrevious className="bg-secondary" />
          </div>
          <div onClick={pauseAutoplay}>
            <CarouselNext className="bg-secondary" />
          </div>
        </Carousel>
      </section>
      <section className="w-full max-w-4xl mx-auto px-4 py-2 mt-20 mb-10">
        <div className="space-y-6">
          <Card className="shadow-md bg-secondary border rounded-lg p-6">
            <CardHeader>
              <h2 className="text-2xl text-center text-[#12151c] font-bold">
                Meet Me 🎙️
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-center text-[#12151c] pb-4">
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
