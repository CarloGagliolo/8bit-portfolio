import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main >

      <div className="flex flex-col items-center justify-between pt-24 gap-10">

        <div>
          <button type="button" className="nes-btn is-primary">
            <i className="nes-icon trophy"></i>
          </button>
          <dialog className="nes-dialog" id="dialog-default">
            <form method="dialog">
              <p className="title">Dialog</p>
              <p>Alert: this is a dialog.</p>
              <menu className="dialog-menu">
                <button className="nes-btn">Cancel</button>
                <button className="nes-btn is-primary">Confirm</button>
              </menu>
            </form>
          </dialog>
        </div>

        <div className="text-center">
          <h1>Stai cercando un vero e proprio Druido del codice?</h1>
        </div>

        <div className="nes-container with-title is-centered bg-blue-200 w-[45rem]">
          <p className="title">Saluti</p>
          <p>Sono uno sviluppatore web da piu di 10 anni.
            Ho un sacco di storie interessanti da raccontare.</p>
        </div>

        <div className="nes-container is-rounded bg-white">

          <div className="flex item-center justify-center pb-4">
            <Image
              width={200}
              height={200}
              src={"/druid.gif"}
              alt=""
            />
          </div>

          <p className="text-center">Questi sono i miei incantesimi:</p>

          <div className="grid grid-cols-3">
            <Link href="#" className="nes-badge">
              <span className="is-dark">Java</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-primary">PHP</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-warning">Javascript</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-success">Next.js</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-dark">Tailwind</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-success">Druido</span>
            </Link>
          </div>
        </div>

      </div>

    </main>
  );
}
