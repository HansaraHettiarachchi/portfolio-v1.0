
'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';

interface Props {
    open: boolean;
    img: string;
    verifyLink: string
    setOpen: () => void;
}

export default function ImageViewerModal({ open, setOpen, img, verifyLink }: Props) {

    return (
        <div>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed bg-[#c0c0c0]/1 inset-0 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"

                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative bg-[#0d093b] transform overflow-hidden rounded-lg text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-4xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        // style={{ background: 'linear-gradient(180deg, #050916 0%, #090a38 50%)' }}
                        >

                            <button className='float-end  mr-3 mt-2 text-white cursor-pointer' onClick={setOpen} ><IoClose size={30} /></button>
                            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mx-5">
                                <img src={img} alt="" className='my-5 mx-auto' />
                                    
                                {verifyLink && (
                                    <div className='flex justify-center mb-2'>
                                        <a target='_blank' className='px-5 py-1 cursor-pointer pres font-medium rounded-lg text-white border-2 border-rose-200' href={verifyLink}>Verify</a>
                                    </div>
                                )}
                            </div>

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
