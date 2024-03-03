import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function AboutPage() {
  return (
    <>
      <div>
        <div className="min-h-96 flex flex-col md:flex-row mb-4">
          <div
            className=" min-h-96 p-10 md:sticky md:top-32"
            style={{
              maxWidth: 600,
              maxHeight: 600,
            }}
          >
            <Image
              src="/logo.png"
              alt="Alphabet visor glass, alphhabet visor glass, 2-wheeler, two-wheeler, 2 wheeler, two wheeler, visor, visor glass, windshield, wind sheild, fairing, fender, auto part, plastic parts, manufactururer, bawana, delhi, india, Alphabet visor glass hero,hero visor glass, honda visor glass, honda, tvs visor glass, tvs, yamaha visor glass, yamaha, bajaj visor glass, bajaj, mahindra visor glass, mahindra, suzuki visor glass, Suzuki, ktm, bawana, delhi, mumbai, pune, panjab, jharkhand, up, kanpur, lucknow"
              width={1000}
              height={1000}
            />
          </div>
          <div className=" min-h-96 text-center md:w-3/5 max-w-50 mb-4 md:py-10 overflow-auto">
            <div className="text-center">
              <h1 className="text-2xl font-bold px-10">Alphabet Visor Glass</h1>
            </div>
            <div className="flex flex-col justify-center items-center text-lg">
              <p className=" w-5/6 overflow-auto text-justify mt-4">
                Established in 2015, Alphabet Visor Glass has been actively
                involved in the production and wholesale distribution of wide
                range of two wheeler visor glasses or windshield or fairing. Our
                primary focus is on meeting customer expectations by delivering
                products of excellent quality. To ensure the highest standards,
                our dedicated team conducts regular and random quality checks.
              </p>
              <p className=" w-5/6 overflow-auto text-justify mt-4">
                Under the capable leadership of Mr. Pawan Goel, whose extensive
                knowledge is invaluable, we have consistently maintained our
                prominent position in the global market. Our commitment to
                providing top-notch products and exceptional service has been a
                key factor in our continued success since our inception.
              </p>
            </div>
            <div className="w-full flex justify-center mt-6">
              <div className="py-4 px-8 md:px-14 w-full md:w-5/6">
                <div className="text-center  py-1 text-xl font-bold">
                  <h1>Company Profile</h1>
                </div>
                <div className="flex border text-left ">
                  <div className="w-1/2 border ">
                    <h4 className="border-b p-2">Company CEO</h4>
                    <h4 className="border-b p-2">Nature of Business</h4>
                    <h4 className="border-b p-2">Legal Status of Firm</h4>
                    <h4 className="border-b p-2">GST No.</h4>

                    <h4 className="border-b p-2">Establishment Year</h4>
                    <h4 className="border-b p-2">Person of contact</h4>
                    <p className="border-b p-2">Contact Number</p>
                    <h4 className="border-b p-2">Shipment Mode</h4>
                    <h4 className="border-b p-2">Payment Mode</h4>
                    <h4 className=" p-2">Address</h4>
                  </div>
                  <div className="w-1/2 border">
                    <p className="border-b p-2">Mr. Pawan Goel</p>
                    <p className="border-b p-2">Manufacturer</p>
                    <p className="border-b p-2">Individual - Proprietor</p>
                    <p className="border-b p-2">07AEBBG8085L1Z6 </p>
                    <p className="border-b p-2">2015</p>
                    <p className="border-b p-2">Mr. Jatin</p>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=917217683367&text&type=phone_number&app_absent=0"
                      target="_blank"
                    >
                      <p className="border-b p-2">+91 7217683367</p>
                    </Link>
                    <p className="border-b p-2">Road</p>
                    <p className="border-b p-2">Cash, Cheque, Online</p>
                    <p className=" p-2">
                      N-109, Sector-1, Bawana Industrial Area, Delhi- 110039,
                      Delhi, India{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 mb-4">
              <h1 className="text-3xl font-bold px-10 ">Why Us</h1>
            </div>
            <div className="flex flex-col justify-center items-center text-lg">
              <p className=" w-5/6 overflow-auto text-justify mt-4">
                <span className="text-xl font-bold">Unmatched Quality :</span>{" "}
                Our commitment to excellence is reflected in the unparalleled
                quality of our products. Each item in our inventory is carefully
                selected and crafted to meet the highest standards. We
                prioritize quality assurance to ensure that every purchase from
                us exceeds your expectations, providing you with products that
                stand the test of time.
              </p>
              <p className=" w-5/6 overflow-auto text-justify mt-4">
                <span className="text-xl font-bold">
                  Customer-Centric Approach :
                </span>{" "}
                At Alphabet Visor Glass, we prioritize your satisfaction above
                all else. Our dedicated customer support team is always ready to
                assist you, addressing your inquiries, concerns, and feedback
                promptly. We believe in building lasting relationships with our
                customers, fostering a positive shopping experience from start
                to finish.
              </p>
              <p className="w-5/6 overflow-auto text-justify mt-4">
                <span className="text-xl font-bold">Affordable Luxury :</span>{" "}
                We understand the importance of balancing quality with
                affordability. That&apos;s why we strive to offer you a curated
                selection of premium products at prices that won&apos;t break
                the bank. Enjoy the luxury of choice without compromising your
                budget. With us, you get the best of both worlds, exceptional
                products and unbeatable value.
              </p>
            </div>
          </div>
        </div>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
          className=""
        />

        <div
          className="elfsight-app-bb3c7b49-0b37-415d-ad76-ff14048e2c08"
          data-elfsight-app-lazy
          style={{ zIndex: -1 }}
        ></div>
        <div style={{ border: 0, alignItems: "center", width: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2557.6441050025087!2d77.04517468376883!3d28.786122113265783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da906113b7c61%3A0x3afd31d6187fea38!2sAlphabet%20Visor%20Glass!5e0!3m2!1sen!2sin!4v1707767629377!5m2!1sen!2sin"
            width="100%"
            height="500"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
}
