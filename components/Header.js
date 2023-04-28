import Image from "next/image";
import React, { useState } from "react";
import {
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoofGuests] = useState(1);
  const router = useRouter()

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () =>{
    setSearchInput("");
  }
  const search = () => {
    router.push({
        pathname:"/search",
        query:{
            location:searchInput,
            startDate:startDate.toISOString(),
            endDate:endDate.toISOString(),
            noOfGuests
        }
    })
  }
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 bg-white">
      {/* left */}
      <div className="relative flex items-center my-auto cursor-pointer " onClick={() => router.push('/')}>
        {/* <Image src="https://links.papareact.com/qd3" width={150} height={40} /> */}
        <h1 className="text-red-300 text-xl">NEXT-BNB</h1>
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "search your place"}
          className="pl-5 bg-transparent outline-none flex-grow"
        />
        <MagnifyingGlassIcon className="h-8 bg-red-300 text-white rounded-full p-2 hidden md:inline-flex cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6" />
        <UsersIcon className="h-6 hidden sm:inline-flex" />
        <div className="flex items-center border-2 p-2 rounded-full space-x-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 outline-none pl-2 text-red-600 text-lg"
              value={noOfGuests}
              onChange={(e) => setNoofGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-600" onClick={search}>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
