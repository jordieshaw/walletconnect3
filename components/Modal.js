import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr'



const Modal = ({ showModal, setShowModal }) => {
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)

    const modalStyle = {
        left: width > 1024 ? '33%' : width > 720 ? '17%' : '10%',
        position: 'absolute',
        top: '15em'
    }

    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

        const handleWindowResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener("resize", handleWindowResize)
        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [])


    return (
        <div
            style={modalStyle}
            className={`${width > 1024 ? 'w-3/10' : width > 720 ? 'w-3/5' : 'w-4/5'} rounded-2xl shadow-lg h-36 mx-auto drop-shadow-2xl p-3 z-10 bg-white`}>
            <div className='flex justify-end p-2'>
                <div
                    onClick={() => {
                        setShowModal(false)
                    }}
                    className='p-2 hover:bg-gray-200 rounded-full'>
                    <GrClose className='w-6 h-6 text-red-700' />
                </div>

            </div>
            <div className='grid place-content-center modal'>
                <div className='md:text-3xl text-red-700 text-xl'>
                    Wallet validation failed.
                </div>
            </div>
        </div>
    )
}

export default Modal