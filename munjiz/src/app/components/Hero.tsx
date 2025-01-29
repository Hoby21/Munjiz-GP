export default function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "darkgreen.jpg",
      }}
    >
      <div className="absolute inset-0 bg-green-900/70">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-6">Hero Section</h1>
          <p className="max-w-2xl mb-8">
            Here you can add a brief description about the purpose of the portal followed with a call to action button
            and an image or an illustration on the left hand side.
          </p>
          <button className="bg-white text-green-800 px-6 py-2 rounded-md inline-flex w-fit">Primary Button</button>
          <div className="flex space-x-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

