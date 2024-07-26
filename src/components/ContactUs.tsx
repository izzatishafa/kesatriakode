import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="flex flex-row gap-16 mb-2 mx-20 mt-10 border-t-2 border-b-2 bg-white h-[400px]">
      <section className="flex flex-col pt-20 w-2/5">
        <Image className="h-16 w-16" src="" alt="logo" />
        <p>Kesatria Kode</p>
        <p>
          Jl. Batik Kumeli No.50, Sukaluyu, <br />
          Kec. Cibeunying Kaler, Kota Bandung <br />
          Jawa Barat 40123
        </p>
        <div className="flex flex-row gap-6 pt-5">
          <Link href="#">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#">
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <section className="flex flex-row pt-20 gap-24">
        <div>
          <h1 className="text-2xl font-semibold">
            Decode Ideas <br /> Discover Potential
          </h1>
          <p className="text-sm py-8 hover:underline">Tentang Kami</p>
        </div>
        <div className="flex flex-col gap-5 text-sm">
            <Link href="" className="hover:underline">Blog</Link>
            <Link href="" className="hover:underline">Reward</Link>
            <Link href="" className="hover:underline">Showcase</Link>
            <Link href="">. . .</Link>
        </div>
        <div className="flex flex-col gap-5 text-sm">
            <Link href="" className="hover:underline">Hubungi Kami</Link>
            <Link href="" className="hover:underline">FAQ</Link>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
