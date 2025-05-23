// components/WhyChoose.tsx
export default function WhyChoose() {
  const features = [
    {
      title: "Innovation",
      subtitle: "Embracing the Future of Technology.",
      description:
        "Our commitment to cutting-edge technology enables us to deliver AI-driven solutions and cloud innovations that keep your business at the forefront of industry trends. We harness the latest advancements to drive efficiency, agility, and growth in every project.",
      icon: "⚡️", // Replace with actual icon component if desired
    },
    {
      title: "Expertise",
      subtitle: "Years of Combined Technical Knowledge.",
      description:
        "Our team of certified professionals brings a wealth of experience across AI, cloud computing, and data analytics. We ensure each solution is implemented with precision, giving you confidence in robust, reliable results that add value to your operations.",
      icon: "🎖️",
    },
    {
      title: "Tailored Solutions",
      subtitle: "Customized for Your Unique Needs.",
      description:
        "No two businesses are alike, and neither are our solutions. We work closely with you to understand your specific challenges and goals, crafting bespoke strategies that align with your objectives, scale seamlessly, and enhance your competitive edge.",
      icon: "🎯",
    },
    {
      title: "Client-Centric",
      subtitle: "Partnering for Your Success.",
      description:
        "At LogicGenX, we believe in building long-term partnerships. Your success is our priority, and we provide dedicated support, transparent communication, and ongoing guidance to help you achieve and exceed your goals with confidence.",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-[#0b1740] text-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="maxWidth mx-auto text-center">
        <h2 className="text-5xl md:text-4xl font-bold mb-4">Why Choose LogicGenX</h2>
        <p className="text-xl md:text-xl text-gray-300 mb-16">Embracing the Future of Technology</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-justify  space-y-4">
              <div className="text-4xl bg-white text-indigo-600 p-4 rounded-full shadow-md">{feature.icon}</div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-xl text-gray-300">{feature.subtitle}</p>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
