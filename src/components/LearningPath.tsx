import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LearningPath = () => {
  const contents = [
    {
      image: "",
      label: "Langkah 1",
      title: "Memulai Pemrograman dengan Kotlin",
      rate: 4.84,
      level: "Level Dasar - Pemula",
      detail:
        "Pelajari dasar bahasa pemrograman, functional programming, Object-Oriented Programming (OOP), serta concurrency dengan menggunakan Kotlin",
      duration: "50 jam",
      learner: "59.7k Siswa",
    },
    {
      image: "",
      label: "Langkah 2",
      title: "Belajar Membuat Aplikasi Android untuk Pemula",
      rate: 4.87,
      level: "Level Pemula",
      detail:
        "Buat aplikasi pertamamu pada Android Studio dengan mempelajari dasar Acticity, Intent. View & ViewGroup, Style & Theme sampai RecyclerView",
      duration: "60 jam",
      learner: "116.4k Siswa",
    },
    {
      image: "",
      label: "Langkah 3",
      title: "Belajar Fundamental Aplikasi Android",
      rate: 4.84,
      level: "Level Menengah",
      detail:
        "Pelajari skill Android dengan kurikulum terlengkap yang dibutuhkan perusahaan. Mulai dari UI/UX, background process, API sampai database.",
      duration: "140 jam",
      learner: "41.9k Siswa",
    },
    {
      image: "",
      label: "Langkah 4",
      title: "Belajar Pengembangan Aplikasi Android Intermediate",
      rate: 4.82,
      level: "Level Mahir",
      detail:
        "Tingkatkan pengalaman pengguna dengan mempelajari Custom View, Animation, Localization, Media, Location, Testing, dan Advanced Database.",
      duration: "150 jam",
      learner: "6.9k Siswa",
    },
    {
      image: "",
      label: "Langkah 5",
      title: "Belajar Prinsip Pemrograman SOLID",
      rate: 4.87,
      level: "Level Menengah",
      detail:
        "Pelajari kelima prinsip desain yang merupakan pedoman untuk rancangan kode yang baik pada pemrograman berorientasi objek (OOP).",
      duration: "15 jam",
      learner: "41.0k Siswa",
    },
    {
      image: "",
      label: "Langkah 6",
      title: "Menjadi Android Developer Expert",
      rate: 4.8,
      level: "Level Profesional",
      detail:
        "Saatnya menjadi Android Expert dengan belajar Clean Architecture, Reactive, Dependency Injection, Modularization, Performance, dan Security.",
      duration: "90 jam",
      learner: "5.9k Siswa",
    },
  ];

  return (
    <div className="mt-16 mx-20 pt-10 pb-6  ">
      <section className="flex flex-col text-center justify-center items-center gap-4 h-72">
        <h1 className="font-normal text-3xl">Learning Path</h1>
        <h3 className="font-light text-md w-1/2">
          Learning path akan membantu Anda dalam belajar di Kesatria Kode dengan
          kurikulum yang dibangun bersama pelaku industri ternama.
        </h3>
      </section>
      <section className="h-72"></section>
      <section className="flex justify-center items-center w-full my-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/4 w-full"
              >
                <div className="p-1">
                  <Card className="">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="">
                        <Image
                          src=""
                          alt="picture"
                          className="w-[48] h-[24]"
                        ></Image>
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="flex flex-row justify-around items-center bg-light-gray rounded-md p-8">
        <div className="flex flex-col w-2/5 gap-3">
          <h1 className="text-2xl font-bold">Android Developer</h1>
          <p className="flex flex-row text-sm font-bold">
            <span>
              <Image src="" alt="icon"></Image>
            </span>
            6 Kelas
          </p>
          <p className="flex flex-row text-sm font-bold">
            <span>
              <Image src="" alt="icon"></Image>
            </span>
            272k siswa belajar di learning path ini
          </p>
          <div className="w-full border border-gray-300 border-b-0"></div>
          <p className="font-light">
            Kurikulum didesain dengan persetujuan dari Tim Google Android untuk
            mempersiapkan developer Android standar Global. Dicoding adalah
            Google Developer Authorized Training Partner.
          </p>
        </div>
        <div>
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent className="flex gap-5">
              {contents.slice(0, 5).map((content, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="">
                    <Card className="h-[280px] w-[200px] flex justify-around items-start">
                      <CardContent className="flex aspect-square items-center justify-center py-2 px-5">
                        <span className="text-xs">
                          <Image
                            src={content.image || "/placeholder-image.png"}
                            alt={content.title}
                            width={100}
                            height={100}
                            className="mb-4 object-contain"
                          />
                          <p className="text-xs">{content.label}</p>
                          <h2 className="font-semibold text-base pb-4">
                            {content.title}
                          </h2>
                          <p className="text-xs text-black">{content.rate}</p>
                          <p className="text-xs text-black">{content.level}</p>
                          <p className="text-base pt-4">{content.detail}</p>
                          <div className="flex flex-row gap-5 pt-3">
                            <p className="text-xs text-black font-bold">
                              {content.duration}
                            </p>
                            <p className="text-xs text-black font-bold">
                              {content.learner}
                            </p>
                          </div>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="flex flex-col bg-dark-blue h-96 rounded-sm mt-7 text-white p-10">
        <div className="flex flex-col w-1/3 gap-5">
          <h1 className="text-3xl font-bold">
            Belajar dengan kelas standar industri global
          </h1>
          <p className="text-sm">
            Kelas di Kesatria Kode tersedia bagi yang belum memiliki kemampuan
            programming (dasar) hingga yang sudah profesional.
          </p>
          <Link href="#" className="text-md font-bold flex items-center gap-2">
            <span>Lihat Semua Kelas</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default LearningPath;
