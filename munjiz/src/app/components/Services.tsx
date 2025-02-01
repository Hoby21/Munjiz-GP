import Image from "next/image"

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          {/* <button className="px-4 py-2 border rounded-md">View all</button> */}
          <h2 className="text-3xl font-bold">Services Section</h2>
        </div>
        <p className="text-left mb-12">Here you can add a brief description about the available services.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative">
                <Image src="/placeholder.svg" alt="Service" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Service Title {i}</h3>
                <p className="text-gray-600 mb-4">
                  Here you can include a brief description of the service in four lines. Here you can include a brief
                  description of what this service provides.
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

