import Image from "next/image"

// Define the service type
type Service = {
  id: number
  title: string
  description: string
  imageUrl: string
}

// Define the services data
const services: Service[] = [
  {
    id: 1,
    title: "Booking Service",
    description:
      "Schedule appointments and book services online. Our booking system allows you to easily reserve time slots and manage your appointments efficiently.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Support Tickets",
    description:
      "Get help when you need it through our support ticket system. Submit and track your support requests with our dedicated customer service team.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Document Services",
    description:
      "Access and manage your important documents securely. Upload, download, and share documents with proper authorization and tracking.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Training Programs",
    description:
      "Enhance your skills with our comprehensive training programs. Access online courses and certification programs designed for professional development.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Resource Management",
    description:
      "Efficiently manage and allocate resources across your organization. Track usage, availability, and schedule resources as needed.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Reports & Analytics",
    description:
      "Access detailed reports and analytics about your service usage. Get insights and make data-driven decisions with our reporting tools.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 7,
    title: "User Management",
    description:
      "Manage user accounts and access permissions. Add, remove, or modify user roles and privileges within your organization.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Notifications",
    description:
      "Stay informed with our notification system. Receive updates about your services, appointments, and important announcements.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 9,
    title: "Payment Services",
    description:
      "Secure payment processing for all your transactions. Manage invoices, track payments, and access payment history easily.",
    imageUrl: "/placeholder.svg",
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Services</h2>
        </div>
        <p className="text-left mb-12">Here you can select the available services.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative">
                <Image src={service.imageUrl || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

