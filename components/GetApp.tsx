import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter flex-col  w-full pb-[100px] '>
      <div className="get-app">
         <div className="z-20 flex flex-col flex-1 justify-center w-full items-start gap-12 ">
          <h2 className=" text-white bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className='regular-16 text-gray-10'>
             Available on ios and Android
          </p>
          <div className=" flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
             type="button"
            title= "App Store"
            variant='btn_white'
            icon='/apple.svg'
            full
            />
            <Button
             type="button"
            title= "Play Store"
            variant='btn_dark_green_outline'
            icon='/android.svg'
            full
            />
          </div>
        </div>

          <div className="flex flex-1 justify-end items-center">
            <Image
              src="/phones.png"
              alt='phones'
              width={550}
              height={870}
            />
            

          </div>

      </div>

    </section>
  )
}

export default GetApp