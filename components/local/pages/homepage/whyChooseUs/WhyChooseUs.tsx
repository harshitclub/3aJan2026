import Image from "next/image";
import whyChoose from "@/public/media/whyChoose/whyChoose1.jpg";
import whyChoose2 from "@/public/media/whyChoose/whyChoose2.jpg";
import whyChoose3 from "@/public/media/whyChoose/whyChoose3.jpg";
import whyChoose4 from "@/public/media/whyChoose/whyChoose4.jpg";
import whyChoose5 from "@/public/media/whyChoose/whyChoose5.jpg";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-(--max-width)">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold text-(--color-text-secondary)">
            Enable Capability Building with
          </h2>
          <p className="mt-1 text-4xl font-semibold text-(--color-corp-blue)">
            Outcome-Driven Learning Solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[
            {
              title: "Flexible Delivery",
              desc: "Classroom, virtual, and hybrid programs delivered seamlessly",
              img: whyChoose,
            },
            {
              title: "Business Impact",
              desc: "Learning initiatives aligned directly with organizational goals",
              img: whyChoose2,
            },
            {
              title: "Hands-on Learning",
              desc: "Practical exercises that strengthen understanding and confidence",
              img: whyChoose3,
            },
            {
              title: "Engaged Learning",
              desc: "Continuous interaction between participants and facilitators",
              img: whyChoose4,
            },
            {
              title: "Tailored Programs",
              desc: "Customized learning journeys designed for workforce needs",
              img: whyChoose5,
            },
          ].map((item, idx) => (
            <div key={idx} className="mx-auto rounded-sm bg-white shadow-lg">
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden rounded-t-sm">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-4 py-10 text-center">
                <h3 className="text-xl font-semibold text-(--color-corp-blue)">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--color-text-body)">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
