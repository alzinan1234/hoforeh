'use client';

import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  {
    icon: '🧠',
    title: 'AI-Driven Innovations',
    description: 'Harness AI to transform data into actionable insights, automate tasks, and drive predictive analytics.',
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description: 'Build secure, scalable cloud infrastructure to support your business’s digital transformation.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Empower data-driven decisions with business intelligence, advanced analytics, and data visualization.',
  },
  {
    icon: '🔗',
    title: 'Intranet Excellence',
    description: 'Optimize internal collaboration with custom-built intranets tailored to your organization’s needs.',
  },
   {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description: 'Build secure, scalable cloud infrastructure to support your business’s digital transformation.',
  },
];

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-blue-600 p-3 rounded-full cursor-pointer hover:bg-blue-700 text-white shadow-md">
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-blue-600 p-3 rounded-full cursor-pointer hover:bg-blue-700 text-white shadow-md">
    <FaArrowLeft />
  </div>
);

export default function Solutions() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="maxWidth mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Intelligent Solutions</h2>
          <p className="text-lg text-gray-300">
            Explore our comprehensive range of tech-driven solutions, from AI innovations to cloud infrastructure and data analytics.
          </p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {services.map((item, index) => (
              <div key={index} className="px-4">
                <div className="bg-white text-gray-800 rounded-2xl p-6 min-h-[280px] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
