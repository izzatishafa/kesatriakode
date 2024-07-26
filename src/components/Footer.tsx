import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-20 h-10 flex flex-row justify-between text-xs">
      <div className="flex flex-row justify-start items-center">
        <p className="font-light border-r-[0.5px] border-gray-500 pr-3">© 2024 Kesatria Kode</p>
        <p className="pl-3">Kesatria Kode adalah merek milik PT Wiratek Solusi Asia</p>
      </div>
      <div className="flex flex-row gap-5">
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
      </div>
    </div>
  );
};

export default Footer;
