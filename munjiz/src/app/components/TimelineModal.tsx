"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Check } from "lucide-react"

interface TimelineModalProps {
  isOpen: boolean
  onClose: () => void
  visitorName: string
}

export function TimelineModal({ isOpen, onClose, visitorName }: TimelineModalProps) {
  const timelineSteps = [
    {
      title: "تم رفع الطلب",
      status: "completed",
      date: "٢٠٢٤/٠٢/٠٥ - ٩:٠٠ ص",
    },
    {
      title: "بانتظار موافقة الموارد البشرية",
      status: "completed",
      date: "٢٠٢٤/٠٢/٠٥ - ٩:٣٠ ص",
    },
    {
      title: "اشعار الأمن لإنشاء التصريح",
      status: "completed",
      date: "٢٠٢٤/٠٢/٠٥ - ١٠:٠٠ ص",
    },
    {
      title: "تم انشاء التصريح للدخول",
      status: "current",
      date: "٢٠٢٤/٠٢/٠٥ - ١٠:٣٠ ص",
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-1">حالة الطلب</h3>
            <p className="text-sm text-gray-500">{visitorName}</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute right-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-green-500/50 to-green-200/50" />

            {/* Timeline Steps */}
            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  {/* Circle */}
                  <div
                    className={`relative z-10 rounded-full border-2 ${
                      step.status === "completed" ? "bg-green-500 border-green-500" : "bg-gray-200 border-gray-200"
                    } p-1 w-10 h-10 flex items-center justify-center`}
                  >
                    <Check className={`w-5 h-5 ${step.status === "completed" ? "text-white" : "text-green-700"}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1.5">
                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

