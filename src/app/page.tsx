import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="p-8 bg-gray-950 flex gap-16 items-center">
        <img className="h-12" src="https://supermegavendas.com/wp-content/uploads/2022/08/LOGO-SUPER-MEGA-VENDAS-1-1024x784.png" alt="" />
        <div className="text-3xl font-extrabold"> Seja bem vindo! </div>
        <Link href='/login'> Login </Link>
      </header>
    </div>
  );
}
