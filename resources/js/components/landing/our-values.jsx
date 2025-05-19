import useEmblaCarousel from 'embla-carousel-react';
import '../../../css/app.css';
import MeganBruno from '../../assets/img/models/megan-bruno2.png';
import MeganJolyne from '../../assets/img/models/megan-jolyne.png';
import MeganStand from '../../assets/img/models/megan-stand.png';
import MeganTrish from '../../assets/img/models/megan-trish.png';
export default function OurValues() {
    const [emblaRef] = useEmblaCarousel();

    // return (
    //     <>
    //         <div className="embla" ref={emblaRef}>
    //             <div className="embla__container">
    //                 <div className="embla__slide">
    //                     <img src={MeganStand} alt="Mannequin 1" />
    //                 </div>
    //                 <div className="embla__slide">
    //                     <img src={MeganTrish} alt="Mannequin 2" />
    //                 </div>
    //                 <div className="embla__slide">
    //                     <img src={MeganJolyne} alt="Mannequin 3" />
    //                 </div>
    //                 <div className="embla__slide">
    //                     <img src={MeganBruno} alt="Mannequin 4" />
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );

    return (
        <>
            <main className="flex flex-row items-center justify-center gap-4 px-6 py-8">
                <div className="w-1/2">
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide">
                                <img src={MeganStand} alt="Mannequin 1" />
                            </div>
                            <div className="embla__slide">
                                <img src={MeganTrish} alt="Mannequin 2" />
                            </div>
                            <div className="embla__slide">
                                <img src={MeganJolyne} alt="Mannequin 3" />
                            </div>
                            <div className="embla__slide">
                                <img src={MeganBruno} alt="Mannequin 4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/2 flex-col justify-center bg-white p-8">
                    <h2 className="mb-4 text-2xl font-bold">Titre accrocheur</h2>
                    <p className="text-gray-700">
                        Voici un petit paragraphe de texte à côté de l’image. Tu peux ajouter des boutons, des listes ou ce que tu veux ici.
                    </p>
                </div>
            </main>
        </>
    );
}
