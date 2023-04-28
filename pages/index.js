import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import styles from '../styles/Home.module.css'

export default function Home({exploreData,cardsData}) {
  return (
    <div>
      <Head>
        <title>Next-BNB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16 '>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
          {exploreData.map((item)=>(
            <SmallCard img={item.img} distance={item.distance} location={item.location} key={item.img}/>
          ))}
          </div>
        </section> 
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live anywhere</h2>
          <div className='flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData.map((item)=>(
            <MediumCard img={item.img} title={item.title}/>
          ))}
          </div>
          
        </section>
        <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlist curated by Airbnb" buttonText="GetInspired"/>
      </main>
      <Footer/>
      
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
  .then(
    (res) => res.json()
  )
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT")
  .then(
    (res) => res.json()
  )
  return {
    props:{
      exploreData,
      cardsData
    }
  }
}