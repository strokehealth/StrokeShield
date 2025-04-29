import { Footer } from 'flowbite-react';

function AppFooter() {
  return (
    <Footer container className="bg-[#fff0f0] rounded-none border-t border-gray-200">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="/favicon.ico"
            alt="Stroke Shield Logo"
            name="Stroke Shield"
          />
          <Footer.LinkGroup>
            <Footer.Link href="/about" className="text-red-700 hover:underline">
              About
            </Footer.Link>
            <Footer.Link href="/resources" className="text-red-700 hover:underline">
              Resources
            </Footer.Link>
            <Footer.Link href="/contact-us" className="text-red-700 hover:underline">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        {/* <div className="mt-2">
          <Footer.Copyright
            by="Stroke Shield"
            year={new Date().getFullYear()}
          />
        </div> */}
      </div>
    </Footer>
  );
}

export default AppFooter;
