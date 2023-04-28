import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapBox from "../components/MapBox";

function search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  console.log(searchResults);
  return (
    <div>
      <Header placeholder={`${location}` | `${noOfGuests} guests`} />
      <main className="flex">
        <section className="pt-14 px-6">
          <p className="text-sm">300+ Stays for {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800">
            <p className="button">Cancellation Flexiblity</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms And Beds</p>
            <p className="button">More Filters</p>
          </div>
          {searchResults.map((item) => (
            <InfoCard
              description={item.description}
              img={item.img}
              lat={item.lat}
              long={item.long}
              location={item.location}
              price={item.price}
              title={item.title}
              total={item.total}
              star={item.star}
            />
          ))}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[400px] 2xl:min-w-[755px]">
          <MapBox searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
