import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">

        {/* Copyright */}
        <p className="text-gray-300 text-sm">
          &copy; 2026 Shaukat Korai. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://www.facebook.com/share/14SVLagbqC5/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300"
          >
            <FaYoutube size={20} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-400 hover:bg-sky-500 text-white p-3 rounded-full transition-all duration-300"
          >
            <FaTwitter size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
