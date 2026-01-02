import Image from "next/image";
import Link from "next/link";
import programSec1 from "@/public/media/programSec1.jpg";
import programSec2 from "@/public/media/programSec2.jpg";

export default function ProgramSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-(--max-width) px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold text-(--color-heading) md:text-4xl">
            <span className="text-(--color-corp-blue)">
              Corporate Training Programs
            </span>{" "}
            Designed for Team Excellence
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* LEFT CARD */}
          <div className="flex overflow-hidden rounded-sm bg-neutral-50 shadow-2xl">
            {/* Image column */}
            <div className="relative hidden w-1/3 lg:block">
              <Image
                src={programSec1}
                alt="Training session"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-8 lg:w-2/3">
              <div>
                <h3 className="mb-6 text-xl font-semibold text-(--color-heading)">
                  Training Categories
                </h3>

                <ul className="space-y-3 text-(--color-text)">
                  <li>• IT & Technical Training</li>
                  <li>• Behavioral Training</li>
                  <li>• Management Training</li>
                  <li>• Leadership Training</li>
                  <li>• Social Impact Training</li>
                  <li>• Compliance Training</li>
                </ul>
              </div>

              {/* Footer CTA strip */}
              <div className="mt-8 flex items-center justify-between border-t border-gray-300 pt-6">
                <Link
                  href="/programs"
                  className="font-medium text-lg text-(--color-corp-blue) hover:underline"
                >
                  Explore the Full List of <br />
                  Training Programs
                </Link>

                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-(--color-corp-blue) text-white">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex overflow-hidden rounded-sm bg-white shadow-2xl">
            {/* Image column — SAME AS LEFT */}
            <div className="relative hidden w-1/3 lg:block">
              <Image
                src={programSec2}
                alt="Excellence programs"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:w-2/3">
              <h3 className="mb-6 text-xl font-semibold text-(--color-heading)">
                Excellence Programs
              </h3>

              <ul className="space-y-3 text-(--color-text)">
                <li>• Sales Excellence</li>
                <li>• Marketing Excellence</li>
                <li>• Operational Excellence</li>
                <li>• Finance Excellence</li>
                <li>• HR Excellence</li>
                <li>• IT Excellence</li>
                <li>• Customer Service Excellence</li>
                <li>• Leadership Excellence</li>
                <li>• Quality Management Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
