export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>accessibility Tools</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact & support</h3>
            <ul className="space-y-2">
              <li>Customer hub</li>
              <li>Contact us</li>
              <li>Engage with Us</li>
              <li>Submit complaint</li>
              <li>Report corruption</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Important links</h3>
            <ul className="space-y-2">
              <li>National service portal</li>
              <li>Open government data</li>
              <li>National strategy for data & Artificial intelligence</li>
              <li>Open data portal</li>
              <li>E-Participation portal</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Overview</h3>
            <ul className="space-y-2">
              <li>About [name of the portal]</li>
              <li>Privacy and terms of use</li>
              <li>How to use [name of the portal]</li>
              <li>News and events</li>
              <li>Service level agreement statistics</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-green-800">
          <div className="flex items-center space-x-4">
            <button className="text-sm">Mobile App</button>
            <button className="text-sm">RSS</button>
            <button className="text-sm">Sitemap</button>
          </div>
          <div className="text-sm">All Right Reserved For Digital Government Authority © 2024</div>
          <div className="text-sm">Developed and Maintained by [insert the name of the entity]</div>
        </div>
      </div>
    </footer>
  )
}

