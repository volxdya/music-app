import {Carousel, CarouselContent} from "@/components/ui/carousel.tsx";

interface Props {
    content: React.ReactNode;
}

export function CarouselScroll({content}: Props) {
    return (
        <Carousel>
            <CarouselContent>
                {content}
            </CarouselContent>
        </Carousel>
    )
}