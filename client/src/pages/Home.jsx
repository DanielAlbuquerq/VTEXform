import { Link } from "react-router-dom"
import { Button } from "flowbite-react"
import { VscOutput } from "react-icons/vsc"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center items-center w-full">
        <h1 className="vt-title-home text-gray-800 w-6/12 sm:w-3/4 md:3/12 lg:3/12 text-[34px] md:text-[38px] lg:text-[38px] leading-tight">
          Service process, fill a form with the basic information for opening
          the ticket
        </h1>
      </div>
      <Link to="/form">
        <Button className="hover:opacity  md:hover:opacity-75 sm:hover:opacity-75 bg-pink-600 md:bg-pink-600">
          Open a ticket
          <VscOutput className="text-lg m-[4px]" />
        </Button>
      </Link>
      <div className="homeFooter w-full h-full"></div>
    </div>
  )
}
