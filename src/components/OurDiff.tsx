import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const images = {
  "item-1": "/images/",
  "item-2": "/images/",
  "item-3": "/images/",
  "item-4": "/images/",
} as const;

type ImageKeys = keyof typeof images;

const OurDiff = () => {
  const [selectedItem, setSelectedItem] = useState<ImageKeys>("item-1");

  return (
    <div className="flex flex-col my-16 mx-20 py-10">
      <section className=" flex flex-col text-center justify-center items-center gap-4">
        <h1 className="font-normal text-3xl">Kenapa Kesatria Kode Berbeda</h1>
        <h3 className="font-light text-md w-1/2">
          Saatnya bijak memilih sumber belajar. Tak hanya materi yang terjamin,
          Kesatria Kode juga memiliki reviewer profesional yang akan mengulas
          kode Anda.
        </h3>
      </section>
      <section className="flex flex-row justify-around items-center gap-20 pt-16 w-full">
        <Accordion
          type="single"
          collapsible
          className="w-[500px] px-10 bg-light-gray rounded-md p-5"
          defaultValue="item-1"
          onValueChange={(value) => setSelectedItem(value as ImageKeys)}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Kurikulum standar industri global
            </AccordionTrigger>
            <AccordionContent>
              Kurikulum dikembangkan bersama perusahaan dan pemilik teknologi
              dunia sesuai kebutuhan industri terkini.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Belajar fleksibel sesuai jadwal anda
            </AccordionTrigger>
            <AccordionContent>
              Belajar kapan pun, di mana pun, secara mandiri. Bebas memilih
              kelas sesuai minat belajar. Akses seumur hidup ke kelas dan forum
              diskusi setelah lulus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Code Review dari Developer Expert
            </AccordionTrigger>
            <AccordionContent>
              Validasi skill Anda melalui 1-on-1 Professional Code Review yang
              diberikan langsung oleh Developer Expert.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Alumni terpercaya di berbagai perusahaan
            </AccordionTrigger>
            <AccordionContent>
              Sertifikat yang membuktikan pengetahuan fundamental beserta
              keterampilan nyata yang diinginkan perusahaan global.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="w-1/2">
          {selectedItem && (
            <Image src={images[selectedItem]} alt="Selected" layout="responsive" width={500} height={500} />
          )}
        </div>
      </section>
    </div>
  );
};

export default OurDiff;
