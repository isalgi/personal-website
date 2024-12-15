"use client"

import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { useState, useEffect } from 'react'

const ProjectSliderBtn = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const updateEdgeStatus = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };

        swiper.on('slideChange', updateEdgeStatus);
        return () => {
            swiper.off('slideChange', updateEdgeStatus);
        };
    }, [swiper]);

    const handlePrev = () => {
        if (!isBeginning) {
            swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (!isEnd) {
            swiper.slideNext();
        }
    };

    return (
        <div className={containerStyles}>
            <button 
                className={`${btnStyles} ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handlePrev}
                disabled={isBeginning}
            >
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button 
                className={`${btnStyles} ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleNext}
                disabled={isEnd}
            >
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    )
}

export default ProjectSliderBtn