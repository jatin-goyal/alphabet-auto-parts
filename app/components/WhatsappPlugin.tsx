import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappPlugin() {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=917217683367&text&type=phone_number&app_absent=0"
      target="_blank"
    >
      <div className="fixed bottom-5 left-5 bg-white border-4 border-lime-600 rounded-full p-2 hover:scale-110 transition duration-150 ease-out hover:ease-in shadow-2xl">
        <div className="flex items-center px-2 z-50 font-bold text-lime-800">
          <FaWhatsapp className=" font-bold h-8 mr-3" /> Whatsapp
        </div>
      </div>
    </Link>
  );
}
