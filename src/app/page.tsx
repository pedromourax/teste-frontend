import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh">
      <div className="absolute z-10 w-full">
        <Header></Header>
      </div>

      <div className=" h-full flex items-center justify-center">
        <div className="flex items-center justify-center">
          <p className="w-1/3 text-wrap text-3xl font-extrabold">Promovemos o maior evento de vendas do setor automotivo do Brasil com prospecção 100% digital.</p>
          <img className="h-96" src="https://papers.co/wallpaper/papers.co-av48-porsche-illustration-art-super-car-black-dark-1-wallpaper.jpg">
          </img>
        </div>
      </div>

    </div>
  );
}
