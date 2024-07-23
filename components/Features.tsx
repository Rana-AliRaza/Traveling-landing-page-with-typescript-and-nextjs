import { FEATURES } from '@/constants/page'
import Image from 'next/image'

const Features = () => {
  return (
    <section className=' flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className="padding-container max-container relative flex justify-end w-full ">
        <div className="flex flex-1 lg:min-h-[900px] ">
          <Image
            src='/phone.png'
            alt='phone'
            width={440}
            height={1000}
            className='feature-phone'
          />

        </div>

        <div className="flex flex-col w-full z-20 lg:w-[60%] ">
          <div className="relative">
            <Image
              src='/camp.svg'
              alt='svg'
              width={50}
              height={50}
              className='absolute left-[-5px]  top-[-28px] w-10 lg:w-[50px]'
            />
            <h2 className='bold-40 lg:bold-64'>
              Our Features
            </h2>
          </div>

          <ul className="mt-10 grid md:grid-cols-2 gap-10 lg:gap-20">
            {
              FEATURES.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />

              ))
            }
          </ul>


        </div>

      </div>

    </section>
  )
}

type featureProps = {
  title: string,
  icon: string,
  description: string
}

const FeatureItem = ({ title, icon, description }: featureProps) => {
  return (

    <li className = "flex flex-col flex-1 w-full items-start " >
      <div className="p-4 lg:p-7 rounded-full bg-green-50">
         <Image
            src={icon}
            alt='map'
            width={28}
            height={28}
           />
      </div>
       <h2 className=" bold-20 lg:bold-32 mt-5 capitalize">
         {title}
       </h2>
       <p>
         {description}
       </p>
    </li>
  )
}

export default Features