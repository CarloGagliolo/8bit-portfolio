import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between p-10 gap-10">

        <div className="text-center">
          <h1>Stai cercando un vero e proprio Druido del codice?</h1>
        </div>

        <div className="nes-container with-title is-centered bg-blue-200 md:w-180">
          <p className="title">Saluti</p>
          <p>Sono uno sviluppatore web da piu di 10 anni.
            Ho un sacco di storie interessanti da raccontare.</p>
        </div>

        <div className="nes-container is-rounded bg-white">
          <div className="flex flex-col item-center justify-center">
            <div className="m-auto">
              <Image
              width={300}
              height={300}
              src={"/druid.gif"}
              alt="druid"
            />
            </div>
            <p className="text-center">Questi sono i miei incantesimi:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
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

      </div>
    </main>
  );
}
