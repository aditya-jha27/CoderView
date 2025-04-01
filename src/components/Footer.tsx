import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t py-6 mt-auto bg-white-100 dark:bg-purple-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-center md:text-left">
        {/* Left - Copyright */}
        <p className="text-purple-600 dark:text-purple-300 text-sm">
          &copy; {new Date().getFullYear()} CoderView. All rights reserved.
        </p>

        {/* Center - Links */}
        <div className="flex space-x-3 text-sm my-4 md:my-0">
          <Link href="/terms" className="text-purple-600 dark:text-purple-300 hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-purple-600 dark:text-purple-300 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-purple-600 dark:text-purple-300 hover:underline">
            Contact Us
          </Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4 text-purple-600 dark:text-purple-300">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/aditya-jha27" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 dark:hover:text-purple-100">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;