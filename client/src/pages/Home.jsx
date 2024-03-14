import { Button, Navbar, Dropdown } from "flowbite-react"
import { vtxImageLink } from "../../img/linkForImg"
export default function Home() {
  const infoInHeader = [
    "Products",
    "Solutions",
    "Customers",
    "Partner",
    "Company",
    "Resources",
  ]

  return (
    <div>
      <Navbar className="border-b" fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={vtxImageLink} className="mr-3 h-6 sm:h-9" alt="VTEXLogo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-pink-600 md:bg-pink-600 ">Contact US</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {infoInHeader.map((info, index) => (
            <Navbar.Link
              key={index}
              className=" hover:text-red-400 md:hover:text-red-400"
            >
              <Dropdown label={info} inline>
                <Dropdown.Item>{""}</Dropdown.Item>
              </Dropdown>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
