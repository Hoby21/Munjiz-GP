import { FaRegComments } from "react-icons/fa6";
import { TbBuildingBridge2 } from "react-icons/tb";
import { FiPackage } from "react-icons/fi";
import { IoTicketOutline } from "react-icons/io5";
import { GrHostMaintenance } from "react-icons/gr";
import { FiKey } from "react-icons/fi";
import { LiaFileContractSolid } from "react-icons/lia";
import { GiProgression } from "react-icons/gi";
// import Image from "next/image"

// Define the service type
type Service = {
  id: number
  title: string
  description: string
  imageUrl: React.ReactNode
}

// Define the services data
const services: Service[] = [
  {
    id: 1,
    title: "Watheq",
    description:
      "Secure inter-organizational communication channel within MOD.",
    imageUrl: <FaRegComments style={  { fontSize: '200px', margin: '0 auto', paddingTop: "70px", color: "rgb(0,160,90)" }} />,
  },
  {
    id: 2,
    title: "Meethaq",
    description:
      "Management of all departments active and passive inter and outer contracts.",
    imageUrl: <LiaFileContractSolid style={  { fontSize: '200px', margin: '0 auto', paddingTop: "70px", color: "rgb(0,160,90)"  }} />,
  },
  {
    id: 3,
    title: "Jiser",
    description:
      "Cross department project management and tracking.",
    imageUrl: <TbBuildingBridge2 style={  { fontSize: '200px', margin: '0 auto', paddingTop: "70px", color: "rgb(0,160,90)"  }} />,
  },
  {
    id: 4,
    title: "Khadoom",
    description:
      "Ticketing system for the IT department assistance.",
    imageUrl: <IoTicketOutline style={  { fontSize: '200px', margin: '0 auto', paddingTop: "70px", color: "rgb(0,160,90)"  }} />,
  },
  {
    id: 5,
    title: "Sanad",
    description:
      "Maintenance management service designed to streamline and automate maintenance scheduling for all devices and equipment within an organization.",
    imageUrl: <GrHostMaintenance style={  { fontSize: '200px', margin: '0 auto', paddingTop: "70px", color: "rgb(0,160,90)"  }} />,
  },
  {
    id: 6,
    title: "Taqeem",
    description:
      "Records team progress and evaluations by Team Leads.",
    imageUrl: <GiProgression style={  { fontSize: '200px', margin: '0 auto', paddingTop: "70px", color: "rgb(0,160,90)"  }} />,
  },
  {
    id: 7,
    title: "Wusool",
    description:
      "Visitor access management within the organization.",
    imageUrl: <FiKey style={  { fontSize: '200px', margin: '0 auto', paddingTop: "70px", color: "rgb(0,160,90)"  }} />,
  },
  {
    id: 8,
    title: "Mawared",
    description:
      "Resource requirement (request) and allocation management (budget, office spaces, vehicles).",
    imageUrl: <FiPackage style={  { fontSize: '200px', margin: '0 auto', paddingTop: "70px", color: "rgb(0,160,90)"  }} />,
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
                {service.imageUrl}
                {/* <Image src={service.imageUrl || "/placeholder.svg"} alt={service.title} fill className="object-cover" /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <button className="bg-green-600 text-white px-6 py-2 rounded-md">Select</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

