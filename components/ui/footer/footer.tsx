"use client";

import Link from 'next/link';
import React, { useState } from 'react';

export default function Footer() {

    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    return (
        <footer className="fixed bottom-5 left-5">
            <button type="button" onClick={() => setIsShowModal(!isShowModal)}>
                <i className="nes-icon is-large star"></i>
            </button>
            {isShowModal && (
                <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10">
                    <div className="nes-dialog w-160 bg-white">
                        <div className="flex justify-end">
                            <button onClick={() => setIsShowModal(false)}>
                                <i className="nes-icon close is-small"></i>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <i className="snes-jp-logo"></i>
                            <p>I miei progetti:</p>
                            <Link href={"#"}>
                                <div className="nes-container is-dark with-title">
                                    <p className="title">8bit-portfolio</p>
                                    <p>Sito portfolio costruito  con grafica 8 bit.</p>
                                </div>
                            </Link>
                            <Link href={"#"}>
                                <div className="nes-container with-title">
                                    <p className="title">Gescar</p>
                                    <p>Gestionale per centri revisione auto.</p>
                                </div>
                            </Link>
                            <Link href={"#"}>
                                <div className="nes-container is-dark with-title">
                                    <p className="title">Multiversorum Magistri</p>
                                    <p>Pagina del gruppo GDR multiversorum magistri.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    )
}
