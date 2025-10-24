"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Subcribe() {

    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    return (
        <div className="fixed bottom-0 right-0 w-32 md:w-64">
            {isShowModal && (
                <div className="w-44">
                    <p className="nes-balloon from-right nes-pointer">Subscribe!</p>
                </div>
            )}
            <Link href={"#"}>
                <Image
                    onMouseEnter={() => setIsShowModal(true)}
                    onMouseLeave={() => setIsShowModal(false)}
                    src="/med.png"
                    width={300}
                    height={300}
                    alt="subscribe" />
            </Link>
        </div>
    )
}
