import logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="container mx-auto bg-base-300 rounded-2xl mt-20 px-10 py-12">
      <div className="grid grid-cols-5 gap-10">
        <div className='col-span-2'>
          <img src={logo} alt="logo" className=" " />

          <p className="mt-3 text-sm opacity-70">
            Build and explore your ideal development stack
            with the technologies you love.
          </p>

          <div className="flex gap-4 mt-4">
            <p className="cursor-pointer">GitHub</p>
            <p className="cursor-pointer">Twitter</p>
            <p className="cursor-pointer">LinkedIn</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-4">Product</p>

          <p className="text-sm mb-2 cursor-pointer">Technologies</p>
          <p className="text-sm mb-2 cursor-pointer">Projects</p>
          <p className="text-sm mb-2 cursor-pointer">Features</p>
        </div>

        <div>
          <p className="font-bold mb-4">Company</p>

          <p className="text-sm mb-2 cursor-pointer">About</p>
          <p className="text-sm mb-2 cursor-pointer">Contact</p>
          <p className="text-sm mb-2 cursor-pointer">Careers</p>
        </div>

        <div>
          <p className="font-bold mb-4">Legal</p>

          <p className="text-sm mb-2 cursor-pointer">Privacy Policy</p>
          <p className="text-sm mb-2 cursor-pointer">Terms of Service</p>
        </div>
      </div>

      <div className=" mt-7 pt-5 flex justify-between">
        <p className="text-sm opacity-70">
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-5 ">
          <p className="text-sm cursor-pointer">Privacy</p>
          <p className="text-sm cursor-pointer">Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;