import { useState } from 'react'

import {
    FaAngleLeft,
    FaAngleRight,
} from 'react-icons/fa'

export const ImageSlider = ({ linkImage }) => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const slider = linkImage.split(",")

    const nextSlide = () => {
        if (currentIndex !== slider.length) {
            setCurrentIndex(currentIndex + 1)
        }
        else if (currentIndex === slider.length) {
            setCurrentIndex(1)
        }
    }

    const prevSlide = () => {
        if (currentIndex !== 1) {
            setCurrentIndex(currentIndex - 1)
        }
        else if (currentIndex === 1) {
            setCurrentIndex(slider.length)
        }
    }
    const moveDot = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div>
            <div className='relative h-96 flex justify-center'>
                {slider.map((item, index, array) => (
                    <img
                        key={index}
                        className={currentIndex === index + 1 ? "flex h-full" : "hidden"}
                        src={array ? array[index] : '/project.png'}
                    />
                ))
                }
                {slider.length > 1 && (
                    <div className='flex gap-3 absolute bottom-2'>
                        <button
                            onClick={nextSlide}
                            className="p-2 bg-[#22212C] rounded cursor-pointer"
                        >
                            <FaAngleLeft />
                        </button>
                        <button
                            onClick={prevSlide}
                            className="p-2 bg-[#22212C] rounded cursor-pointer"
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                )}
            </div>
            <div className="flex gap-2 mt-3 justify-center">
                {Array.from({ length: slider.length }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={currentIndex === index + 1 ? "flex bg-black w-2 h-2 rounded-full" : "bg-white w-2 h-2 rounded-full"}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}

