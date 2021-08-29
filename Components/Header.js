import React from 'react'
import Image from 'next/image'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';
import Headericon from '../Components/Headericon';
import { useSession,signOut } from 'next-auth/client';

function Header() {
const[session] = useSession();

    return (
        <div
            className='sticky top-0 z-50
        bg-white flex items-center p-2 
        lg:px-5 shadow-md'>
            {/* left*/}
            <div className='flex items-center'>
                <Image
                    src='https://links.papareact.com/5me'
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <div className='flex ml-2 
                items-center 
                rounded-full 
                bg-gray-100 p-2'>
                    <SearchIcon className='h-6 
                    text-gray-600' />
                    <input
                        className='hidden md:inline-flex ml-2 
                        items-center 
                        bg-transparent outline-none 
                        placeholder-gray-500 
                        flex-shrink'
                        type='text'
                        placeholder="search facebook">
                    </input>
                </div>
            </div>

            {/* center */}
            <div
                className='flex justify-center 
            flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <Headericon active Icon={HomeIcon} />
                    <Headericon Icon={FlagIcon} />
                    <Headericon Icon={PlayIcon} />
                    <Headericon Icon={ShoppingCartIcon} />
                    <Headericon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* right */}

            {/* profile pic */}
            <Image
                onClick={signOut}
                className='rounded-full cursor-pointer'
                src={session.user.image}
                width='40'
                height='40'
                layout='fixed'
            />

            <p className='whitespace-nowrap font-semibold pr-3'>{session.user.name}</p>
            <ViewGridIcon className='Icon' />
            <ChatIcon className='Icon' />
            <BellIcon className='Icon' />
            <ChevronDownIcon className='Icon' />
        </div>
    )
}

export default Header
