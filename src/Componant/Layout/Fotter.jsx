import Container from "../Common/Container";
import Images from "../Common/Images";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Fotter = () => {
  return (
   <footer className="bg-black text-white pl-8 lg:pl-0  md:pl-0 py-20">
      <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Logo */}
          <div>
            <Images
              img="https://neeshorgo.com.bd/wp-content/uploads/2020/11/Neeshorgo-Logo.png"
              alt="logo"
              className="w-[260px] object-cover"
            />
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-5 text-[20px] text-[#bdbdbd]">
              <li className="hover:text-[#c8a96a] duration-300 cursor-pointer">
                Book Now
              </li>

              <li className="hover:text-[#c8a96a] duration-300 cursor-pointer">
                Testimonials
              </li>

              <li className="hover:text-[#c8a96a] duration-300 cursor-pointer">
                Gallery
              </li>

              <li className="hover:text-[#c8a96a] duration-300 cursor-pointer">
                About Us
              </li>

              <li className="hover:text-[#c8a96a] duration-300 cursor-pointer">
                Contact
              </li>

              <li className="hover:text-[#c8a96a] duration-300 cursor-pointer">
                Terms and Conditions
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-4xl font-semibold mb-10">
              Follow us
            </h2>

            <div className="flex items-center gap-4">

              <div className="border-b flex justify-center border-white pb-4 w-[60px]">
                <FaFacebookF className="text-[#1877F2] text-3xl cursor-pointer hover:scale-110  duration-300" />
              </div>

              <div className="border-b flex justify-center border-white pb-4 w-[60px]">
                <FaLinkedinIn className="text-[#0A66C2] text-3xl cursor-pointer hover:scale-110 duration-300" />
              </div>

              <div className="border-b flex justify-center border-white pb-4 w-[60px]">
                <FaInstagram className="text-[#E4405F] text-3xl cursor-pointer hover:scale-110 duration-300" />
              </div>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-4xl font-semibold mb-10">
              Contact Us
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-2xl mb-3 font-medium">
                  Phone
                </h3>

                <p className="text-[#d6d6d6] text-[20px] leading-10">
                  +880 1780 077056
                  <br />
                  +880 1617 834401(WhatsApp)
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-3 font-medium">
                  Email
                </h3>

                <p className="text-[#d6d6d6] text-[20px]">
                  neeshorgocox@gmail.com
                </p>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </footer>
  )
}

export default Fotter