import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const NewestProgram = () => {
  return (
    <div className="bg-light-gray">
    <div className="flex flex-row my-16 mx-20 justify-around h-72 py-10">
      <section className="w-1/2">
        <h1 className="text-3xl py-2">Program terbaru kami</h1>
        <p className="text-sm">
          Bekerja sama dengan partner, kami <br /> menyelenggarakan beberapa
          program untuk <br />
          mendukung developer Indonesia.
        </p>
      </section>
      <section className="">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="h-48">
                    <CardContent className="flex aspect-square p-6">
                      <span className="text-lg font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
    </div>
  );
};
export default NewestProgram;
