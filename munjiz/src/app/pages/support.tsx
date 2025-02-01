import { Mail, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link href="/">Link</Link>
          <span className="mx-2">{">"}</span>
          <span>Link</span>
        </div>
      </div>

      {/* Help & Support Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-right mb-4">Help & Support</h1>
        <p className="text-right text-gray-600 mb-12">
          We work continuously to make your experience through government services easier, see what support channel
          suits better your necessities
        </p>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-center mb-4">
                {i % 2 === 0 ? (
                  <Mail className="w-8 h-8 text-green-600" />
                ) : (
                  <HelpCircle className="w-8 h-8 text-green-600" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{i % 2 === 0 ? "Contact us" : "FAQs"}</h3>
              <p className="text-center text-gray-600 mb-4">
                Here you can include a description in four lines. Here you can include a description in four lines. Here
                you can include a description
              </p>
              <div className="text-center text-green-600 text-sm mb-1">Service availability: all week</div>
              <div className="text-center text-green-600 text-sm mb-6">Service availability: within 5 days</div>
              <div className="flex justify-center">
                <button className="bg-green-600 text-white px-6 py-2 rounded-md">Action</button>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>Was this page useful?</span>
            <button className="px-4 py-1 bg-green-600 text-white rounded">Yes</button>
            <button className="px-4 py-1 bg-green-600 text-white rounded">No</button>
          </div>
          <div>of users said Yes from 2843 Feedbacks 60%</div>
          <div>Last Modified Date: 04/12/2020 - 4:13 PM Saudi Arabia Time</div>
        </div>
      </div>
    </div>
  )
}

