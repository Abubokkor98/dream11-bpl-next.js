import APsubtitle from "./utils/APsubtitle";
import AvailableBtn from "./utils/AvailableBtn";
import SelectedBtn from "./utils/SelectedBtn";

export default function AvailablePlayers() {
  return (
    <div className="px-4 md:px-0 sticky top-14 bg-white z-100">
      <div className="flex flex-col md:flex-row justify-between items-center py-5 space-y-4 md:space-y-0 ">
        {/* sub title */}
        <APsubtitle />
        {/* buttons */}
        <div className="flex gap-3 md:gap-5">
          <AvailableBtn />
          <SelectedBtn />
        </div>
      </div>
    </div>
  );
}
