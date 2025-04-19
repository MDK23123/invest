import { Footer } from "flowbite-react";

export default function AppFooter() {
  return (
    <Footer container className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t dark:border-gray-700">
    <div className="w-full text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand
          href="https://flowbite.com"
          src="/placeholder.svg?height=40&width=40"
          alt="InvestPro Logo"
          name="InvestPro"
        />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <Footer.Copyright href="#" by="InvestPro™" year={2024} />
    </div>
  </Footer>
  )
}