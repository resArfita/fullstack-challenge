import { FaHotel, FaUtensils } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";

const TripIcon = ({ accommodation, transportation, food, duration, date }) => {
    return (
        
    <div className="grid grid-cols-5 gap-2 p-2 text-gray-700 text-sm">
    {/* Accommodation */}
    <div className="flex flex-col">
      <p className="font-semibold mb-2 text-xs">Accommodation</p>
      <div className="flex space-x-2">
        <FaHotel size={10}/>
        <p className="text-xs">{accommodation}</p>
      </div>
    </div>

    {/* Transportation */}
    <div className="flex flex-col">
      <p className="font-semibold mb-2 text-xs">Transportation</p>
      <div className="flex space-x-2">
        <MdFlight size={12}/>
        <p className="text-xs">{transportation}</p>
      </div>
    </div>

    {/* Eat */}
    <div className="flex flex-col">
      <p className="font-semibold mb-2 text-xs">Eat</p>
      <div className="flex space-x-2">
        <FaUtensils size={10}/>
        <p className="text-xs">{food}</p>
      </div>
    </div>

    {/* Duration */}
    <div className="flex flex-col">
      <p className="font-semibold mb-2 text-xs">Duration</p>
      <div className="flex space-x-2">
        <IoTimeOutline size={10}/>
        <p className="text-xs">{duration}</p>
      </div>
    </div>

    {/* Date */}
    <div className="flex flex-col">
      <p className="font-semibold mb-2 text-xs">Date</p>
      <div className="flex space-x-2">
        <BsCalendarEvent size={10}/>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  </div>
    )
}

export default TripIcon;