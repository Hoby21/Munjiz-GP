import { Mail, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-600">

        </div>
      </div>

      {/* Help & Support Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-left mb-4">Help & Support</h1>
        <div><br /> <br /> <br /><br /><br /><br /></div>


        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-center mb-4">
                {i % 2 === 0 ? (
                  <Mail className="w-8 h-8 text-green-600" />
                ) : (
                  <HelpCircle className="w-8 h-8 text-green-600" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{i % 2 === 0 ? "Contact support" : "FAQs"}</h3>
              <p className="text-center text-gray-600 mb-4">
                
              </p>

              <div className="flex justify-center">
                <button className="bg-green-600 text-white px-6 py-2 rounded-md">Select</button>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-600">

        </div>
      </div>
    </div>
  )
}

