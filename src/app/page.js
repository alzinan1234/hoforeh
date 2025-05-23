import Banner from "@/components/Home/banner/Banner";
import Solutions from "@/components/Home/Solutions/Solutions";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Banner/>
      <Solutions/>

      <WhyChoose/>
     
    </div>
  );
}
