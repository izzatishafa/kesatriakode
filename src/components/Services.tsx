import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Rocket, Calendar, BriefcaseBusiness, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-light-gray h-96 my-10">
      <div className="flex flex-row px-20 py-10">
        <section className="w-1/2">
          <h1 className="text-4xl font-semibold py-2">
            Bergabung dengan jaringan <br /> developer terbesar
          </h1>
          <p className="font-light">
            Selain belajar di Kesatria Kode, Anda juga bisa mengikuti <br />{" "}
            kegiatan dan layanan kami yang lain.
          </p>
          <div className="flex flex-row gap-3">
            <Button className="mt-20 rounded-sm p-6 bg-slate-200 text-black text-base hover:cursor-pointer hover:bg-slate-200">
              <Rocket className="h-8 w-8 pr-3" />
              <span>CHALLENGE</span>
            </Button>
            <Button className="mt-20 rounded-sm p-6 bg-light-gray text-black text-base hover:cursor-pointer hover:bg-slate-200">
              <Calendar className="h-8 w-8 pr-3" />
              <span>EVENT</span>
            </Button>
            <Button className="mt-20 rounded-sm p-6 bg-light-gray text-black text-base hover:cursor-pointer hover:bg-slate-200">
              <BriefcaseBusiness className="h-8 w-8 pr-3" />
              <span>JOB</span>
            </Button>
          </div>
          <div className="w-full border border-gray-300 border-b-0 mt-5"></div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold py-4">
              Kesatria Kode Challenge
            </h1>
            <p className="font-light">
              Kami telah menyelenggarakan berbagai macam challenge dengan jutaan
              hadiah. Dengan platform Challenge, developer bisa mengasah skill
              yang dipelajari dari Kesatria Kode.
            </p>
            <Link href="#" className="text-md font-bold flex items-center gap-2 py-6">
            <span>Lihat Challenge</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          </div>
        </section>
        <section className="w-1/2">
          <Image src="" alt="pict" />
        </section>
      </div>
    </div>
  );
};

export default Services;
