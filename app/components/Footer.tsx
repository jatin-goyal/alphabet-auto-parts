export default function Footer() {
  return (
    <div className="mt-8 py-10 md:px-20 border-t-2 bg-black h-100 md:grid md:grid-cols-2 text-white">
      <div className="py-4 px-6 text-center md:text-left">
        <h1 className="font-bold text-xl ">Contact Us :</h1>
        <p className="pt-1">
          Customer Care: <span className="text-primary">+91 7217683367</span>
        </p>
        <p className="py-1">E-mail: shopvisorglass@gmail.com</p>
        <p className="">Bawana, Delhi, India</p>
      </div>
      <div className="py-4 px-6 text-white text-center md:text-right flex items-right flex-col justify-center">
        <h1 className=" text-2xl text-white font-bold">Alphabet Visor Glass</h1>
        <p className="py-0">GST No. : 12345673489012 </p>
        <p className="py-0">
          All rights reserved by Om Sai Auto Industries @2015{" "}
        </p>{" "}
      </div>
    </div>
  );
}
