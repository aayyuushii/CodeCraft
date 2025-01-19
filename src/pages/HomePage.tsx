import HomePageFixedInput from "../homePage/HomePageFixedInput";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
        <div className="w-full bg-gray-300 bg-opacity-50 flex justify-center items-center m-auto">
          {/* Dashboard content */}
            <HomePageFixedInput />
            {/* <Input />        */}
      </div>
    </div>
  );
}
