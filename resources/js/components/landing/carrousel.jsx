import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import '../../../css/app.css';
import MeganBruno from '../../assets/img/models/megan-bruno2.png';
import MeganJolyne from '../../assets/img/models/megan-jolyne.png';
import MeganStand from '../../assets/img/models/megan-stand.png';
import MeganTrish from '../../assets/img/models/megan-trish.png';

export default function Carrousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    return (
        <>
            <main className="flex flex-col items-center justify-center gap-4 px-4 py-8 sm:px-6 md:flex-row">
                <div className="relative w-full max-w-md md:w-1/2 md:max-w-none">
                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-200"
                        aria-label="Précédent"
                    >
                        <ChevronLeftIcon className="h-6 w-6 text-[#6C3989]" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-200"
                        aria-label="Suivant"
                    >
                        <ChevronRightIcon className="h-6 w-6 text-[#6C3989]" />
                    </button>

                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container flex">
                            <div className="embla__slide flex-[0_0_100%]">
                                <img src={MeganStand} alt="Megan en tenue de Trish Una avec le stand Spice Girl." className="h-auto w-full" />
                            </div>
                            <div className="embla__slide flex-[0_0_100%]">
                                <img src={MeganTrish} alt="Megan en tenue de Trish Una." className="h-auto w-full" />
                            </div>
                            <div className="embla__slide flex-[0_0_100%]">
                                <img src={MeganJolyne} alt="Megan en  tenue Jolyne Kujo." className="h-auto w-full" />
                            </div>
                            <div className="embla__slide flex-[0_0_100%]">
                                <img
                                    src={MeganBruno}
                                    alt="Megan en tenue de Bruno Bucciarati pour les anime CrunchyRoll Awards."
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-col justify-center px-2 md:w-1/2 md:px-4">
                    <h2 className="mb-4 text-lg font-bold text-[#6C3989] sm:text-xl">Elégant et tendance</h2>
                    <p className="text-md md:text-base">
                        Megan incarne une présence forte — comme un Stand dans JoJo’s. Chaque tenue révèle une aura unique, entre classe et caractère.
                        Rien d’exagéré : juste l’équilibre parfait entre force et élégance. Un look soigné, une attitude posée, une vraie vibe
                        Joestar. Des pièces qui t’accompagnent comme ton pouvoir silencieux. S’affirmer sans parler, impressionner sans forcer. Pour
                        celles et ceux qui savent que le style est une extension de soi. Découvre une collection qui fusionne mode et énergie
                        iconique.
                    </p>
                    <button className="mt-4 cursor-pointer scroll-py-3.5 rounded-lg bg-[#6C3989] px-4 py-2 text-sm text-white hover:underline">
                        <Link href="/products"> En savoir plus</Link>
                    </button>
                </div>
            </main>
        </>
    );
}
