import './globals.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <main>
    <h1 className="md:text-[5.8rem] text-3xl   text-center pt-20 font-extrabold md:leading-[6rem] leading-10 text-transparent font-inter">
        <span className="bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
        Your Gateway to the <br /> World&apos;s Latest News and Trends
        </span>
      </h1>
      <p className="md:text-3xl text-xl text-center font-normal leading-10 pt-10 font-inter">
        Welcome to Sahad Daily, where you will stay up-to-date on breaking news, <br/> emerging trends, and thought-provoking insights.
      </p>
      <Link href={'./blogs'}>
        <div className=' text-center pt-12'>
        <button className="btn uppercase btn-primary text-3xl rounded bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text hover:bg-[#1c3357] active:bg-[#1c3357] focus:outline-none focus:ring border text-center font-semibold transition-transform transform hover:scale-110 duration-300">
            View Articles
          </button>
        </div>
      </Link>
    </main>
    </>
  )
}