import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  // ...
}

export default function Home() {
  return (
    <div className="grid grid-col-2 md:grid-col-3 lg:grid-col-3 flex justify-center items-center min-h-screen">
      <section className="flex items-center w-full max-w-4xl mx-auto px-4 py-2 space-x-4">
        <img
          src="https://i.ibb.co/XZ71sCGN/pfp.jpg"
          alt="Joshua's Profile Picture"
          className="w-48 h-48 mx-auto rounded-full border-2 mr-2"
        />
        <div className="flex-1 space-y-6">
          <Card className="shadow-md bg-background border rounded-xl p-6">
            <CardHeader className="text-3xl text-center font-bold mb-5">
              My skills 📋
            </CardHeader>
            <CardContent>
              <ul className="text-xl text-center">
                <li>Javascript </li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Next.js (basics)</li>
                <li>Node.js (basics)</li>
                <li>React (basics)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full max-w-4xl mx-auto px-4 py-2">
        <div className="space-y-6">
          <Card className="shadow-md bg-background border rounded-lg p-6">
            <CardHeader className="text-2xl text-center font-bold mb-5">
              Hi I'm Josh👋
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center font-bold underline mb-4">
                A Small Brief
              </p>
              <p className="text-sm text-center pb-4">
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
      <h1 className="text-3xl text-center font-bold underline decoration-2 mb-4 mt-15">
        My Projects
      </h1>
      <section className="w-full max-w-4xl mx-auto px-4 py-2 mt-10">
        <Carousel
          orientation="vertical"
          className="w-full max-w-2xl mx-auto px-6"
        >
          <CarouselContent className="-ml-4 flex touch-pan-x snap-x snap-mandatory h-[270px] sm:h-[250px] md:h-[270px]">
            <CarouselItem className="flex-none w-full pl-4 snap-start">
              <Card className="p-8 text-center shadow-lg border border-border rounded-full flex flex-col items-center justify-between h-[250px] w-[470px] gap-y-6">
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl font-semibold text-center">
                    Zajaik
                  </CardTitle>
                  <CardContent className="text-muted-foreground text-sm text-center p-0"></CardContent>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 text-center shadow-lg border border-border rounded-full flex flex-col items-center justify-between h-[250px] w-[470px] gap-y-6">
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl font-semibold text-center">
                    Text Adventure Game
                  </CardTitle>
                  <CardContent className="text-muted-foreground text-sm text-center p-0"></CardContent>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 text-center shadow-lg border border-border rounded-full flex flex-col items-center justify-between h-[250px] w-[470px] gap-y-6">
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl font-semibold text-center">
                    Caesar Cipher
                  </CardTitle>
                  <CardContent className="text-muted-foreground text-sm text-center p-0"></CardContent>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 text-center shadow-lg border border-border rounded-full flex flex-col items-center justify-between h-[250px] w-[470px] gap-y-6">
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl font-semibold text-center">
                    Calculator
                  </CardTitle>
                  <CardContent className="text-muted-foreground text-sm text-center p-0"></CardContent>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 text-center shadow-sm border border-border rounded-full flex flex-col items-center justify-between h-[250px] w-[470px] gap-y-6">
                <div className="flex flex-col items-center gap-4">
                  <CardTitle className="text-xl font-semibold text-center">
                    Weather App
                  </CardTitle>
                  <CardContent className="text-muted-foreground text-sm text-center p-0"></CardContent>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
