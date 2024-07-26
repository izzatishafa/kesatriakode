import { Button } from "./ui/button"

const GetStarted = () => {
  return (
    <div className="mb-5 mx-20">
        <div className="flex flex-col gap-4 justify-center items-center bg-slate-700 rounded-sm h-60 p-10 text-white">
            <h1 className="text-3xl font-semibold">Tunggu apa lagi?</h1>
            <p>Belajar lebih terarah dengan learning path dan code review</p>
            <Button className="bg-white text-slate-800 font-light rounded sm p-5 mt-8 hover:cursor-pointer hover:bg-white">Buat Akun</Button>
        </div>
    </div>
  )
}

export default GetStarted
