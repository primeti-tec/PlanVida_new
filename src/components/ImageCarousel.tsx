import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "/lovable-uploads/fachada_clinica.png",
  "/lovable-uploads/9fe10a4b-407d-43bd-9800-0f01185f7620.png",
  "/lovable-uploads/exames.PNG",
  "/lovable-uploads/consultorio.PNG",
  "/lovable-uploads/recepcao.PNG",
];

export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden rounded-2xl shadow-lg">
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <img 
                    src={src} 
                    alt={`Imagem do carrossel ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white" />
    </Carousel>
  )
}
