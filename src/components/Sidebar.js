import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";


export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link  href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full" />
      </Link>
      <Link href="/"  className="flex items-center p-3 hover:bg-gray-100 rounded-full gap-2 w-fit">
      <TiHome className="w-7 h-7"/>
      <span className="font-bold hidden xl:inline">
        Home 
      </span>
      </Link>
      <button className="bg-blue-400 text-white rounded-full mt-4 hover:bg-blue-600 w-48 h-9 shadow-md">Sign In </button>
    </div>
  )
}
