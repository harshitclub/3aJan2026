import Link from "next/link";
import "./style.css";
import Image from "next/image";
import phoneIcon from "@/public/media/icons/phone.svg";
import locationIcon from "@/public/media/icons/location.svg";
import indiaFlag from "@/public/media/flags/india.svg";
export default function Contact() {
  return (
    <>
      <section className="w-full flex items-center justify-center">
        <div className="contactPageBox flex w-full max-w-(--max-width) px-20 justify-between">
          <div className="contactPBoxLeft">
            <h1 className="text-4xl font-extrabold mb-3 text-(--color-text-primary)">
              Contact us ⟶
            </h1>
            <h2 className="text-2xl mb-3 text-(--color-text-body)">
              Tell us more about your requirements at
            </h2>
            <Link
              href="/"
              className="text-2xl underline font-bold text-(--color-corp-blue)"
            >
              info@3alearningsolutions.com
            </Link>
            <div className="contactReachBox flex border border-white rounded p-5 items-start mt-15 mb-5 gap-5">
              <Image src={phoneIcon} alt="" />
              <div>
                <h3 className="text-xl font-bold mb-2">Reach Out</h3>
                <div className="flex gap-2">
                  <Image src={indiaFlag} alt="" />
                  <h4 className="font-bold">India</h4>
                  <Link href="/">+91 000000000</Link>
                </div>
              </div>
            </div>
            <div className="contactlocationBox flex border border-white rounded p-5 items-start gap-5">
              <Image src={locationIcon} alt="" />
              <div>
                <h3 className="text-xl font-bold mb-2">Office</h3>
                <div>
                  <h4 className="font-bold mb-1">India</h4>
                  <p>
                    3a Learning Solutions India Pvt. Ltd
                    <br />
                    The Ithum, Tower A,
                    <br />
                    Electronic City, Noida
                    <br />
                    Uttar Pradesh, India
                  </p>
                  <p>IN +91 000000000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contactPBoxRight">
            <form className="bg-white rounded px-10 py-5 w-full">
              <div className="flex mb-5 items-center">
                <p className="text-md">
                  Full Name <span className="text-red-600">*</span>
                </p>
                <input
                  placeholder="Enter your Name"
                  className="border border-gray-400 p-2 rounded"
                />
              </div>
              <div className="flex mb-5 items-center">
                <p className="text-md">
                  Work Email <span className="text-red-600">*</span>
                </p>
                <input
                  placeholder="Enter your Work Email"
                  className="border border-gray-400 p-2 rounded"
                />
              </div>
              <div className="flex mb-5 items-center">
                <p className="text-md">
                  Company Name <span className="text-red-600">*</span>
                </p>
                <input
                  placeholder="Enter your Company Name"
                  className="border border-gray-400 p-2 rounded"
                />
              </div>
              <div className="flex mb-5 items-center">
                <p className="text-md">
                  Job Title <span className="text-red-600">*</span>
                </p>
                <input
                  placeholder="Enter your Job Title"
                  className="border border-gray-400 p-2 rounded"
                />
              </div>
              <div className="flex mb-5 items-center">
                <p className="text-md">
                  Phone Number <span className="text-red-600">*</span>
                </p>
                <input
                  placeholder="Enter your Phone Number"
                  className="border border-gray-400 p-2 rounded"
                />
              </div>
              <div className="flex mb-5 items-center">
                <p className="text-md">
                  Training Requirements <span className="text-red-600">*</span>
                </p>
                <textarea
                  placeholder="Please specify your training requirements"
                  className="border border-gray-400 p-2 rounded"
                />
              </div>
              <div className="flex">
                <p></p>
                <button type="submit" className="p-2 rounded cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
