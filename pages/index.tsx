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
      <div className="flex flex-row bg-purple-800 p-24 items-center">
        <div className="w-3/5 h-full flex flex-col justify-center">
          <div className=' text-purple-100  '>
            <h1 className='text-8xl '>KIG.PET</h1>
            <p className='font-thin'>Kigurumi 小站 -- 收录娃娃作品</p>
            <p className='font-thin'></p>
            <p className=' font-thin text-xs'>(访问本站需保持网络畅通)</p>
            <div className='text'>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full flex flex-col justify-center items-center hidden md:block ">
          {/* <Image src="/remi-1.png" width={2617} height={3590} className=' -ml-60' /> */}
          {/* <Image src="/remi.png" width={2398} height={3655} /> */}
          <iframe src='https://xn--r1a.website/s/s/moekig' className='rounded-lg h-96 w-full' />
        </div>
      </div>
      <div className='h-10 bg-purple-800'></div>
      <div className='p-12   bg-purple-200'>
        <div className=' bg-purple-50 rounded-lg shadow-lg justify-between -mt-24 flex flex-row items-center font-thin'>
          <div className='py-4 border-2   hover:border-2 rounded-lg hover:bg-purple-100 hover:cursor-pointer border-purple-50  hover:border-purple-800  m-2 px-4  lg:px-12 text-center flex flex-row justify-around items-center text-purple-800 text-2xl'>
            <p className=' hidden lg:block'>
              <Image src='/icon/archive.svg' width={40} height={40} />
            </p>
            <p className='ml-2 text-sm lg:text-2xl'>娃娃档案</p>
          </div>
          <div className='py-4 border-2   hover:border-2 rounded-lg hover:bg-purple-100 hover:cursor-pointer border-purple-50  hover:border-purple-800  m-2 px-4  lg:px-12 text-center flex flex-row justify-around items-center text-purple-800 text-2xl'>
            <p className=' hidden lg:block'>
              <Image src='/icon/newcomer.svg' width={40} height={40} />
            </p>
            <p className='ml-2 text-sm lg:text-2xl'>新娃入坑</p>
          </div>
          <div className='py-4 border-2   hover:border-2 rounded-lg hover:bg-purple-100 hover:cursor-pointer border-purple-50  hover:border-purple-800  m-2 px-4  lg:px-12 text-center flex flex-row justify-around items-center text-purple-800 text-2xl'>
            <p className=' hidden lg:block'>
              <Image src='/icon/workshop.svg' width={40} height={40} />
            </p>
            <p className='ml-2 text-sm lg:text-2xl'>商家工坊</p>
          </div>
          <div className='py-4 border-2   hover:border-2 rounded-lg hover:bg-purple-100 hover:cursor-pointer border-purple-50  hover:border-purple-800  m-2 px-4  lg:px-12 text-center flex flex-row justify-around items-center text-purple-800 text-2xl'>
            <p className=' hidden lg:block'>
              <Image src='/icon/handbook.svg' width={40} height={40} />
            </p>
            <p className='ml-2 text-sm lg:text-2xl'>日常指南</p>
          </div>
        </div>
      </div>
      <div className='p-12  bg-purple-200'>
        <div className=' bg-white rounded-lg shadow-lg -mt-24 lg:-mt-20 p-12 text-purple-800'>
          <h2 className='text-purple-800 text-2xl font-bold mb-4'>已被收录的娃娃</h2>
          <div className='flex flex-row flex-wrap justify-center sm:justify-between items-center text-2xl font-thin'>
            {
              Array(8).fill(0).map((_, i) => {
                return <div key={i} className='border-2 p-2 rounded-lg border-purple-50 w-60 flex flex-row items-center mb-4'>
                  <Image src='/avatar/remi.jpg' width={90} height={90} className=' rounded-full border-2 border-purple-800 w-24' />
                  <div className='ml-4 flex flex-col justify-between h-full'>
                    <p className=''> RemiIO</p>
                    <p className='text-sm underline'>@Remi_IO</p>
                    <p className='text-sm underline'>twitter</p>
                  </div>
                </div>
              }
              )
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
