import { Button } from "./ui/button";
import Image from "next/image";


const Header = () => {
  return (
    <div className="flex flex-col my-16 mx-20 gap-20">
      <div className="flex flex-row justify-around items-center">
        <section>
          <h1 className="font-semibold text-4xl">
            Bangun Karirmu Sebagai <br /> Developer Profesional
          </h1>
          <p className="py-5 text-lg">
            Mulai belajar terarah dengan learning path
          </p>
          <Button className="mt-20 rounded-sm p-6 bg-dark-blue">Belajar Sekarang</Button>
        </section>
        <section>
          <Image src="" alt="" className="w-80 h-80"></Image>
        </section>
      </div>
      <div className="flex flex-col h-96">
        <h1 className="text-center text-2xl font-semibold">Telah dipercaya Oleh</h1>
        <section>

        </section>
      </div>
    </div>
  );
};

export default Header;
