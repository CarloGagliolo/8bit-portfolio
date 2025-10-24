"use client";

import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <header className="p-5">
      <div className="flex w-full justify-end">
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={() => setIsShowModal(!isShowModal)}
        >
          <i className="nes-icon trophy"></i>
        </button>
        {isShowModal && (
          <div className="nes-dialog absolute top-20 bg-white z-10">
            <div className="flex justify-end">
              <button onClick={() => setIsShowModal(false)}>
                <i className="nes-icon close is-small"></i>
              </button>
            </div>
            <div className="p-3">
              <p className="title text-sm">Vieni nel mio boscho druidico!</p>
              <div className="flex gap-2 justify-center items-center">
                <Link href={"https://github.com/CarloGagliolo"} target="_blank">
                  <button type="button" className="nes-btn" >
                    <i className="nes-icon github is-small"></i>
                  </button>
                </Link>
                <Link href={"https://www.facebook.com/polp.etto"} target="_blank">
                  <button type="button" className="nes-btn" >
                    <i className="nes-icon facebook is-small"></i>
                  </button>
                </Link>
                <Link href={"https://www.instagram.com/dallapartedichi"} target="_blank">
                  <button type="button" className="nes-btn" >
                    <i className="nes-icon instagram is-small"></i>
                  </button>
                </Link>
                <Link href={"https://www.linkedin.com/in/carlo-gagliolo"} target="_blank">
                  <button type="button" className="nes-btn" >
                    <i className="nes-icon linkedin is-small"></i>
                  </button>
                </Link>
                <Link href={"mailto:carlo126055@gmail.com"} target="_blank">
                  <button type="button" className="nes-btn" >
                    <i className="nes-icon gmail is-small"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
