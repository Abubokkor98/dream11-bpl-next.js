
export default function Navbar({ coins }) {

    return (
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/80">
        <div className="max-w-screen-lg mx-auto p-4 flex items-center justify-between">
          {/* logo and coins */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto rounded-lg" />
            <div className="flex items-center space-x-1 text-yellow-600">
              <span className="font-semibold">{coins}</span>
              <span>Coins</span>
              <i className="fa-solid fa-coins text-yellow-500"></i>
            </div>
          </div>
  
          <ul className="flex gap-8 text-base font-medium text-gray-700">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Schedules</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  