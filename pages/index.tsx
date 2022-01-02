import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>kig.pet - 娃娃做的娃娃网站</title>
        <meta name="description" content="娃娃做的娃娃网站" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="flex flex-row bg-sky-800 p-24 items-center">
        <div className="w-3/5 h-full flex flex-col justify-center">
          <div className=' text-sky-100  '>
            <h1 className='text-8xl '>KIG.PET</h1>
            <p className='font-thin'>Kigurumi 小站 -- 收录娃娃作品</p>
            <p className='font-thin'></p>
            <p className=' font-thin text-xs'>(访问本站需保持网络畅通)</p>
            <div className='text'>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full flex flex-col justify-center items-center">
          {/* <Image src="/remi-1.png" width={2617} height={3590} className=' -ml-60' /> */}
          {/* <Image src="/remi.png" width={2398} height={3655} /> */}
          <iframe src='https://xn--r1a.website/s/s/moekig' className='rounded-lg h-96 w-full' />
        </div>
      </div>
      <div className='h-10 bg-sky-800'></div>
      <div className='p-12 h-10  bg-sky-200'>
        <div className=' bg-sky-50 rounded-lg shadow-lg justify-between -mt-32 flex flex-row items-center font-thin'>
          <div className='py-6 border-0  hover:border-2 rounded-lg hover:bg-sky-100 hover:cursor-pointer  border-sky-800  m-2  px-12 text-center flex flex-row justify-around items-center text-sky-800 text-2xl'>
            <p>
              <Image src='/icon/archive.svg' width={60} height={60} />
            </p>
            <p className='ml-2'>娃娃档案</p>
          </div>
          <div className='py-6 border-0  hover:border-2 rounded-lg hover:bg-sky-100 hover:cursor-pointer  border-sky-800  m-2  px-12 text-center flex flex-row justify-around items-center text-sky-800 text-2xl'>
            <p>
              <Image src='/icon/newcomer.svg' width={60} height={60} />
            </p>
            <p className='ml-2'>新娃入坑</p>
          </div>
          <div className='py-6 border-0  hover:border-2 rounded-lg hover:bg-sky-100 hover:cursor-pointer  border-sky-800  m-2  px-12 text-center flex flex-row justify-around items-center text-sky-800 text-2xl'>
            <p>
              <Image src='/icon/workshop.svg' width={60} height={60} />
            </p>
            <p className='ml-2'>制造工坊</p>
          </div>
          <div className='py-6 border-0  hover:border-2 rounded-lg hover:bg-sky-100 hover:cursor-pointer  border-sky-800  m-2  px-12 text-center flex flex-row justify-around items-center text-sky-800 text-2xl'>
            <p>
              <Image src='/icon/handbook.svg' width={60} height={60} />
            </p>
            <p className='ml-2'>手册指南</p>
          </div>
        </div>
      </div>
      <div className='p-12  bg-sky-200'>
        <div className=' bg-white rounded-lg shadow-lg -mt-20 p-12'>
          <h2 className='text-sky-800 text-2xl font-thin'>Kiger 收录</h2>
          <div className='flex flex-row  justify-around items-center text-2xl font-thin'>
            <Image src='https://pbs.twimg.com/profile_images/1475873695734263808/G2EpCbiq_400x400.jpg' width={150} height={150} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
