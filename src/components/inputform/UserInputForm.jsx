import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { HiPaperAirplane } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";

const UserInputForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("Message Send Sucessfully");
          
        },
        (error) => {
          console.log(error.text);
          
        }
      );
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="mx-auto">
        <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Contact Me
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                className="flex items-center text-gray-800 mb-1"
                htmlFor="name"
              >
                <FiUser className="mr-2" /> Your Name
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="flex items-center text-gray-800 mb-1"
                htmlFor="email"
              >
                <FiMail className="mr-2" /> Your Email
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                placeholder="Enter your email"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="flex items-center text-gray-800 mb-1"
                htmlFor="message"
              >
                <FiMessageSquare className="mr-2" /> Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                rows={4}
                placeholder="Enter your message"
                name="message"
                id="message"
              />
            </div>
            <button
              className="flex items-center justify-center w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg cursor-pointer hover:bg-yellow-400 transition duration-300"
              type="submit"
            >
              <HiPaperAirplane className="mr-2 text-gray-700 transform rotate-45" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInputForm;
