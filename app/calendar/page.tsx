import SecondaryButton from "@/components/local/buttons/SecondaryBtn";
import CHeader from "@/components/local/pages/common/CHeader/CHeader";
import ClientSection from "@/components/local/pages/homepage/clients/Clients";
import CallToAction from "@/components/local/pages/homepage/cta/CallToAction";

const programs = [
  {
    program: "Advanced MS Excel",
    days: 2,
    dates: "15–16 Oct",
    price: "₹6,000",
    location: "Online",
  },
  {
    program: "PMP",
    days: 4,
    dates: "15–16 Oct",
    price: "₹6,000",
    location: "Online",
  },
  {
    program: "ITIL V3 2011 Foundation Training & Certification",
    days: 2,
    dates: "15–16 Oct",
    price: "₹6,000",
    location: "Online",
  },
  {
    program: "ISO 9001:2015 QMS Awareness cum Transition",
    days: 2,
    dates: "15–16 Oct",
    price: "₹6,000",
    location: "Online",
  },
  {
    program: "HR Analytics",
    days: 2,
    dates: "15–16 Oct",
    price: "₹6,000",
    location: "Online",
  },
  {
    program: "Lean Six Sigma Yellow Belt (LSSYB)",
    days: 2,
    dates: "15–16 Oct",
    price: "₹6,000",
    location: "Online",
  },
  {
    program: "Value Stream Mapping (VSM)",
    days: 2,
    dates: "15–16 Oct",
    price: "₹6,000",
    location: "Online",
  },
  {
    program: "Warehouse Management System",
    days: 2,
    dates: "15–16 Oct",
    price: "₹6,000",
    location: "Online",
  },
  {
    program: "Finance for Non-Finance",
    days: 2,
    dates: "15–16 Oct",
    price: "₹6,000",
    location: "Online",
  },
];

export default function Calendar() {
  return (
    <>
      <CHeader
        title="Program Calendar"
        subTitle="Explore Our Upcoming Programs and Trainings"
      />
      <section className="mx-auto max-w-(--max-width) py-15">
        <div className="overflow-hidden rounded border border-gray-200 bg-white">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Program
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Days
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Dates
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Price
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Location
                </th>
              </tr>
            </thead>

            <tbody>
              {programs.map((item, index) => (
                <tr
                  key={index}
                  className="border-t transition hover:bg-blue-50/40"
                >
                  <td className="px-6 py-4 text-gray-800">{item.program}</td>
                  <td className="px-6 py-4 text-center text-gray-700">
                    {item.days}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">
                    {item.dates}
                  </td>
                  <td className="px-6 py-4 text-center font-medium text-gray-800">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      {item.location}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <SecondaryButton text="Enquire About Programs" href="contact" />
        </div>
      </section>
      <ClientSection />
    </>
  );
}
