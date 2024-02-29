import {
  facebook,
  github,
  linkedin,
  mail,
  mapPin,
  phone,
} from '../assets/icons';
import Button from '../components/Button';

const Contact = () => {
  return (
    <>
      <section className="flex w-full min-h-full justify-center items-center">
        <div data-aos='fade-up' className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-zinc-900  w-full max-w-4xl p-8 shadow-lg text-white">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Me</h1>
              <p className="pt-2 text-white">
                Feel free to contact me. I'll get back to you as soon as
                possible!
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items center">
                <img src={phone} alt="Phone" width={25} />
                <span>+63 975 109 7464</span>
              </div>
              <div className="inline-flex space-x-2 items center">
                <img src={mail} alt="Mail" width={25} />
                <span>gaserojales@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items center">
                <img src={mapPin} alt="Location" width={25} />
                <span>Block 18 Lot 13 Vista Grande</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="">
                <img src={facebook} alt="Facebook" width={25} />
              </a>
              <a href="">
                <img src={github} alt="Github" width={25} />
              </a>
              <a href="">
                <img src={linkedin} alt="LinkedIn" width={25} />
              </a>
            </div>
          </div>
          <div className="bg-white rounded-sm shadow-lg p-8 text-black">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="ring-1 rounded-sm ring-gray-300 w-full round-sm px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="ring-1 rounded-sm ring-gray-300 w-full round-sm px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="ring-1 rounded-sm ring-gray-300 w-full round-sm px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-wrap w-full justify-end">
                {/* <button className="inline-block self-center w-full bg-primary text-black font-bold rounded-sm px-6 py-2 uppercase text-sm">
                  Send Message
                </button> */}
                <Button
                  label="Send Message"
                  backgroundColor="bg-primary"
                  hoverButton="hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
