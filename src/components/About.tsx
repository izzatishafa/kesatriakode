import Link from "next/link";
import { CodeXml, CirclePlay } from "lucide-react";


const About = () => {
  return (
    <div className="mb-5 mx-20">
      <section className="flex flex-col bg-dark-blue h-96 rounded-sm mt-7 text-white p-10">
        <div className="flex flex-col w-1/3 gap-5">
          <CodeXml className="p-[2px] h-8 w-8 bg-white text-dark-blue rounded-sm"/>
          <h1 className="text-3xl font-bold">Kenal lebih dekat dengan kami!</h1>
          <p className="text-sm">
            Sebagai <i>platform</i> edukasi teknologi, pengembangan <i>skill</i> para
            developer adalah fokus Kesatria Kode. Untuk mencapainya, tersedia
            berbagai kelas <i>online</i>, program pelatihan, dan sertifikasi
            pemrograman dengan kualitas yang terjamin serta 2 layanan utama:
            Code Review & Forum Diskusi.
          </p>
          <Link href="#" className="text-md font-bold flex items-center gap-2">
            <CirclePlay className="h-4 w-4" />
            <span>Tonton Video</span>
          </Link>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default About;
