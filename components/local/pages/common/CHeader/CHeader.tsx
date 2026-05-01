import "./style.css";
import SecondaryButton from "@/components/local/buttons/SecondaryBtn";
import cHeader from "@/public/media/corporate/cHeader.jpg";
import Image from "next/image";

const CHeader = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <section className="cHeader w-full flex items-center justify-center py-15">
      <div className="cHeaderHead w-full max-w-(--max-width) rounded p-15 flex justify-between items-center">
        <div className="cHHLeft">
          <h1 className="text-4xl font-bold text-white mb-5">{title}</h1>
          <p className="text-xl text-white mb-5">{subTitle}</p>
          <SecondaryButton text="Talk To Us" href="contact" />
        </div>
        <div className="cHHRight">
          <Image src={cHeader} alt="" className="rounded" />
        </div>
      </div>
    </section>
  );
};

export default CHeader;
