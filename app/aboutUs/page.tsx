import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <div className="min-h-96 flex flex-col md:flex-row mb-4">
        <div
          className=" min-h-96 p-10"
          style={{ maxWidth: 600, maxHeight: 600 }}
        >
          <Image src="/logo.png" alt="logo" width={1000} height={1000} />
        </div>
        <div
          className=" min-h-96 text-center md:w-3/5 max-w-50  md:py-10 overflow-auto"
          style={{ height: "68vh" }}
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold px-10">Alphabet Visor Glass</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-lg">
            <p className=" w-5/6 overflow-auto text-justify mt-4">
              Established in 2014, Alphabet Visor Glass has been actively
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
              <div className="text-center border py-1 text-xl font-bold">
                <h1>Company Profile</h1>
              </div>
              <div className="flex border text-left ">
                <div className="w-1/2 border ">
                  <h4 className="border-b p-2">Company CEO</h4>
                  <h4 className="border-b p-2">Nature of Business</h4>
                  <h4 className="border-b p-2">Legal Status of Firm</h4>
                  <h4 className="border-b p-2">GST No.</h4>
                  <h4 className="border-b p-2">Annual Turnover</h4>
                  <h4 className="border-b p-2">Establishment Year</h4>
                  <h4 className="border-b p-2">No. of Employees</h4>
                  <h4 className="border-b p-2">Shipment Mode</h4>
                  <h4 className="border-b p-2">Payment Mode</h4>
                  <h4 className=" p-2">Address</h4>
                </div>
                <div className="w-1/2 border">
                  <p className="border-b p-2">Mr. Pawan Goel</p>
                  <p className="border-b p-2">Manufacturer</p>
                  <p className="border-b p-2">Individual - Proprietor</p>
                  <p className="border-b p-2">07AEBBG8085L1Z6 </p>
                  <p className="border-b p-2">Rs.1 Crore </p>
                  <p className="border-b p-2">2014</p>
                  <p className="border-b p-2">6 Employees</p>
                  <p className="border-b p-2">Road</p>
                  <p className="border-b p-2">Cash, Cheque, Online</p>
                  <p className="border p-2">
                    JM-228, Sector-1, Bawana Industrial Area, Delhi- 110039,
                    Delhi, India{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
        </div>
      </div>

      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div
        className="elfsight-app-bb3c7b49-0b37-415d-ad76-ff14048e2c08"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
