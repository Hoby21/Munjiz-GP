import { Users, Star, Plus, User } from "lucide-react"

export default function Statistics() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-8">
          <button className="px-4 py-2 border rounded-md">Secondary</button>
          <h2 className="text-3xl font-bold">About us Section</h2>
        </div>
        <p className="text-center max-w-3xl mx-auto mb-16">
          Here you can add a brief description about the purpose of the portal followed with a call to action button and
          an image or an illustration on the left hand side.
        </p>
        <div className="grid grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, color: "text-green-600" },
            { icon: Star, color: "text-green-600" },
            { icon: Plus, color: "text-green-600" },
            { icon: User, color: "text-green-600" },
          ].map((Item, i) => (
            <div key={i} className="flex flex-col items-center">
              <Item.icon className={`w-8 h-8 ${Item.color} mb-4`} />
              <div className="text-4xl font-bold text-green-800">1.5M</div>
              <div className="text-gray-600">Person</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

