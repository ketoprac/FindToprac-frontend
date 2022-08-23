import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-stone-50 border-b w-100 px-16 py-4 text-black flex justify-between items-center"> 
          <Link href="/"><a><h3 className="font-bold text-xl">FindToprac</h3></a></Link>
          <h3>Dark Mode</h3>
    </nav>
  )
}

export default Navbar;