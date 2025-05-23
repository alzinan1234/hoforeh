import Image from 'next/image'

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/homebanner.webp" // <-- Replace with your actual image
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-green-300">
          Unlock Business Potential with Intelligent Tech Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Empowering your digital transformation with AI, Cloud, and Data Analytics
        </p>
        <button className="mt-8 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          Discover Our Solutions →
        </button>
      </div>
    </section>
  )
}
