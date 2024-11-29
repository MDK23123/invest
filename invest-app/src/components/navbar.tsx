import { Navbar, Button } from "flowbite-react";
import React from "react";

export default function NavBar() {
    return(
        <Navbar fluid className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-700 sticky top-0 z-50">
        <Navbar.Brand href="/">
          <img src="/placeholder.svg?height=40&width=40" className="mr-3 h-8" alt="Invest App Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">InvestPro</span>
        </Navbar.Brand>
        <div className="flex items-center md:order-2 space-x-3">
          <Button color="light" pill size="sm">
            Log in
          </Button>
          <Button gradientDuoTone="purpleToBlue" pill size="sm">
            Sign up
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>Home</Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    )
}