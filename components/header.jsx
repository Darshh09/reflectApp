import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const Header = () => {
    return (
        <header className={"container mx-auto"}>
            <nav className={"py-6 px-4 flex justify-between items-center"}>
                <Link href={'/'}>
                    <Image src={"/logo.png"} alt={"reflectlogo "} width={200} height={60}       className="h-10 w-auto object-contain"/>
                </Link>
                <div className={'flex items-center gap-4'}>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}
export default Header
