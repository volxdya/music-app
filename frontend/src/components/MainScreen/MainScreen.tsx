import './MainScreen.scss';
import { Play } from "../../icons/Play.tsx";
import { MainCard } from "../../ui/Cards/MainCard/MainCard.tsx";

export function MainScreen() {
    return (
        <>
            <div className="d-flex justify-content-center circle-container">
                <div className="circle d-flex justify-content-center">
                    <div className='c-2'></div>
                    <div className='c-3'></div>
                    <div className='c-4'></div>
                    <div className='c-5'></div>
                </div>
            </div>
            <button className="title-wave">
                <div className="d-flex align-items-center gap-2 wave-button justify-content-center">
                    <Play />
                    Моя волна
                </div>
            </button>
            <div className="container-playlists d-flex gap-3 mt-5">
                <MainCard />
                <MainCard />
            </div>
            <p className="mt-5">Аннотация

                Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях, так как позволяют изданию выделиться из информационного шума. Цели исследования – выявить распространенность лонгридов в российских СМИ и содержательные и композиционные особенности этих текстов. Исследование включает мониторинг публикаций в центральных российских изданиях и последующий контент-анализ 10 материалов из 10 печатных и онлайновых изданий. Выводы исследования: лонгриды присутствуют в изданиях разных типов: от ежедневных газет − до нишевых новостных сайтов. Они посвящены, как правило, описанию нового явления; имеют объем от 2 до 4 тыс. слов и построены по композиционной схеме чередования примеров и обобщений.

                Ключевые слова: лонгрид, жанры, тренд, российская пресса.</p>
        </>

    );
}