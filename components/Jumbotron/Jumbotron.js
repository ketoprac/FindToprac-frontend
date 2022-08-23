import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Jumbotron = () => {
  return (
    <div className="w-100 flex flex-col items-center h-screen justify-around">
      <div className="text-center">
      <h1 className="text-7xl mb-5">FindToprac</h1>
      <p>Tinggalkan ayam geprekmu, makanlah ketoprak bersamaku</p>
      </div>
      <a href="#content" className="animate-bounce"><MdOutlineKeyboardArrowDown fontSize="3em" /></a>
    </div>
  )
}

export default Jumbotron;