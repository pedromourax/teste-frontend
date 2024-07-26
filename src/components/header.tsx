import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="p-8 bg-gray-950 flex justify-between items-center">
        <img className="h-12" src="https://supermegavendas.com/wp-content/uploads/2022/08/LOGO-SUPER-MEGA-VENDAS-1-1024x784.png"/>
        <div className="flex items-center gap-12">
            <div className="text-xl font-bold"> Quem somos</div>
            <div className="text-3xl font-extrabold"> Seja bem vindo! </div>
            <div className="text-xl font-bold"> Quem somos</div>
        </div>
        <Link href='/login' className="flex items-center gap-2"> Login <ArrowLeftEndOnRectangleIcon className=" size-6 text-white"></ArrowLeftEndOnRectangleIcon></Link>
      </header>
    </div>
  );
}