import Image from "next/image"


const Guide = () => {
  return (
    <section className=' flexCenter flex-col'>
      <div className=" padding-container max-container w-full pb-24">
        <Image
          src="/camp.svg"
          alt="campt icon"
          width={50}
          height={50}
        />

        <p className="regular-18 uppercase -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap gap-5 justify-between lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] capitalize">
            Guide to Easy Paths
            </h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain


            </p>
        </div>

      </div>

      <div className="flexCenter max-container w-full relative ">
        <Image
          src="/boat.png"
          alt="boat img"
          width={1440}
          height={580}
          className=" w-full object-cover 2xl:rounded-5xl object-center "
        />

        <div className="flex bg-white  absolute py-8 pl-5 pr-7 gap-3 shadow-md lg:mt-20 md:pl-[5%]  rounded-3xl   border ">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
           <div className="flex-col flexBetween ">
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full">
               <p className="regular-16 text-gray-20">
                  Destination
               </p>
               <p className="text-green-50 bold-16">
                48 min
               </p>
              </div>
              <p className="bold-20 mt-2">
                Agus Calientes
              </p>
            </div>

            <div className="flex flex-col w-full ">
              <div className="flexBetween w-full">
               <p className="regular-16 text-gray-20">
                  Start track
               </p>

              </div>
              <p className="bold-20 mt-2">
                Wonorejo Pasuruan
              </p>
            </div>

           </div>

        </div>

      </div>
     
    </section>
  )
}

export default Guide