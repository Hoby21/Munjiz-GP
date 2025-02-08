"use client"
import { FaRegComments } from "react-icons/fa6"
import { TbBuildingBridge2 } from "react-icons/tb"
import { FiPackage, FiKey } from "react-icons/fi"
import { IoTicketOutline } from "react-icons/io5"
import { GrHostMaintenance } from "react-icons/gr"
import { LiaFileContractSolid } from "react-icons/lia"
import { GiProgression } from "react-icons/gi"
import { useRouter } from "next/navigation"
import Sidebar from "./components/Sidebar"

const services = [
  {
    id: 1,
    title: "وثيق",
    description: "تواصل آمن بين الاقسام داخل وزارة الدفاع",
    icon: <FaRegComments className="text-green-500  text-6xl mb-4" />,
    link: "/Watheeq",
  },
  {
    id: 2,
    title: "ميثاق",
    description: "إدارة التعاقدات داخل الوزارة    ",
    icon: <LiaFileContractSolid className="text-green-500  text-6xl mb-8" />,
    link: "/meethaq",
  },
  {
    id: 3,
    title: "جسر",
    description: "إدارة وتتبع المشاريع عبر الإدارات",
    icon: <TbBuildingBridge2 className="text-green-500  text-6xl mb-4" />,
    link: "/jiser",
  },
  {
    id: 4,
    title: "خدوم",
    description: " نظام لحل الأعطال التقنية",
    icon: <IoTicketOutline className="text-green-500 text-6xl mb-4 color: 'green'" />,
    link: "/Khadoom",
  },
  {
    id: 5,
    title: "سند",
    description: "جدولة وتتبع الصيانة",
    icon: <GrHostMaintenance className="text-green-500 text-6xl mb-4" />,
    link: "/Sanad",
  },
  {
    id: 6,
    title: "تقييم",
    description: "تتبع تقدم الفريق والتقييمات من قبل القادة",
    icon: <GiProgression className="text-green-500  text-6xl mb-4" />,
    link: "/taqeem",
  },
  {
    id: 7,
    title: "وصول",
    description: "إدارة وصول الزوار للوزارة",
    icon: <FiKey className="text-green-500  text-6xl mb-4" />,
    link: "/wusool",
  },
  {
    id: 8,
    title: "موارد",
    description: "إدارة تخصيص الموارد",
    icon: <FiPackage className="text-green-500  text-6xl mb-4" />,
    link: "/mawared",
  },
]

export default function ServicesWithSidebar() {
  const router = useRouter()

  return (
    <div className="flex flex-row-reverse min-h-screen w-full" dir="rtl">
      <Sidebar />
      <main className="flex-grow pr-80 w-full">
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            {/* Title */}
            <div className="mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">خدماتنا</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                اكتشف مجموعة حلولنا المبتكرة المصممة لتبسيط عملياتك
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-between p-6 overflow-hidden cursor-pointer h-[350px] min-h-[350px]"
                  onClick={() => router.push(service.link)}
                >
                  <div className="w-full text-center">
                    {/* Icon */}
                    <div className="text-primary text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {service.icon}
                    </div>
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                    {/* Description */}
                    <p className="text-gray-600 text-xl">{service.description}</p>
                  </div>
                  {/* Learn More */}
                  <div className="mt-6 w-full text-right">
                    <span className="text-primary font-semibold inline-flex items-center group-hover:underline">
                      المزيد
                      <svg
                        className="w-4 h-4 mr-2 transform rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}