import React from 'react'
import Modal from 'react-modal';
import Appointment from '../pages/Appointment';
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Navbar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>

      <nav class="bg-blue-300 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">Hospital</span>
          </Link>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-white bg-sky-600 hover:bg-blue-800   font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-800" onClick={openModal} >Book an Appointment</button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col text-white font-medium p-4 md:p-0 mt-4 border border-gray-100  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className='m-2 '>
                <Link to="/" class="block py-2 px-3 md:p-0 text-white bg-blue-700  md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li className='m-2'>
                <Link to="/about-us" class="block py-2 text-white px-3 md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              </li>
              <li className='m-2'>
                <Link to="/treatment" class="block py-2 px-3 md:p-0 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Treatment</Link>
              </li>
              <li className='m-2'>
                <Link to="/contact-us" class="block py-2 px-3 text-white md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Appointment closeModal={closeModal} />
      </Modal>
    </div>

  )
}

export default Navbar
