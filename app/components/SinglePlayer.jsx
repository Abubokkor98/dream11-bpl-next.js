import ChoosePlayerBtn from "./utils/ChoosePlayerBtn";
import { FaFlag, FaUser } from "react-icons/fa";

export default function SinglePlayer({ player }) {
  const { name, country, image, role, battingType, bowlingType, price } = player;

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Player Image */}
      <figure className="mb-4">
        <img src={image} alt={name} className="rounded-lg w-full h-48 object-cover" />
      </figure>

      {/* Player Info */}
      <div className="space-y-3">
        {/* Name & Country */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-600" />
            <h2 className="text-lg font-semibold">{name}</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaFlag className="text-blue-500" />
            <p>{country}</p>
          </div>
        </div>

        {/* Role */}
        <div className="bg-gray-100 text-gray-700 rounded-md px-2 py-1 inline-block text-sm">
          {role}
        </div>

        {/* Rating */}
        <div>
          <h2 className="font-bold text-gray-700">Rating</h2>
          <div className="flex justify-between text-sm text-gray-600">
            <h2 className="font-medium">{battingType}</h2>
            <h2>{bowlingType}</h2>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-3">
          <h2 className="font-semibold text-lg text-yellow-600">Price: ${price}</h2>
          <ChoosePlayerBtn player={player} />
        </div>
      </div>
    </div>
  );
}
