import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    PopoverGroup
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import logo from '../../assets/images/basic/logo.png'

const navigation = {

    pages: [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Education & Experience', href: '#edu&exp' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contacts', href: '#contacts' },
    ],
}

export default function NavBar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-transparent">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden ">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full bg-linear-to-tr bg-linear-r  from-[#011938]  to-[#04021d]"
                    >
                        <div className="flex px-4 pt-5 pb-2">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>



                        <div className="space-y-6 border-t  px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <a href={page.href}  onClick={() => setOpen(false)} className="-m-2 block p-2 font-medium text-white hover:text-slate-300">
                                        {page.name}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* <div className="space-y-6 border-t px-4 py-6">
                            <div className="flow-root">
                                <a href="#" className="-m-2 block p-2 font-medium text-white hover:text-slate-300">
                                    Sign in
                                </a>
                            </div>
                            <div className="flow-root">
                                <a href="#" className="-m-2 block p-2 font-medium text-white hover:text-slate-300">
                                    Create account
                                </a>
                            </div>
                        </div> */}
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="relative pt-5 ">

                <nav aria-label="Top" className="mx-auto xl:px-25 px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="flex h-16 items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-transparent p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>

                            {/* Logo */}
                            {/* <div className="ml-4 flex lg:ml-0"> */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src={logo}
                                        className="h-18 md:h-23 w-auto"
                                    />
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-12 ms-8">

                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={`${page.href}`}
                                            className="flex items-center text-[16px] font-medium text-white hover:text-slate-300"
                                        >
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </PopoverGroup>


                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
