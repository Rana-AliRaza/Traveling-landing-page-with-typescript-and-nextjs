import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants/page'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24 '>
        <div className="max-container padding-container w-full flex flex-col gap-14">
          <div className="flex flex-col md:flex-row justify-center items-start gap-[10%] ">
            <Link  href="/" className='mb-10'>
             <Image
               src="/hilink-logo.svg"
               alt='logo'
               width={74}
               height={29}
             />
            </Link>

            <div className=" flex      flex-wrap gap-10 sm:justify-between md:flex-1">
              {
                FOOTER_LINKS.map((colum)=>(
                  <FooterColumns title={colum.title} key={colum.title}>
                    <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                      {
                        colum.links.map((link)=>(
                          <Link href="/" key={link}>
                            {link}
                          </Link>

                          )
                        )
                      }

                    </ul>
                  </FooterColumns>
                ))
              }

            <div className="flex flex-col gap-5">
               <FooterColumns title={FOOTER_CONTACT_INFO.title}>
                  {
                    FOOTER_CONTACT_INFO.links.map((info)=> (
                       <Link href='/' key={info.label} className='flex md:flex-col lg:flex-row gap-4'>
                          <p className="">
                            {info.label}
                          </p>
                          <p className="medium-14 whitespace-nowrap text-blue-70">
                            {info.value}
                          </p>
                       </Link>
                    ))
                  }
               </FooterColumns>
            </div>

            <div className="flex flex-col gap-5">
                <FooterColumns title={SOCIALS.title}>
                   <div className="flex gap-4 regular-14 text-gray-30">
                       {
                        SOCIALS.links.map((social) => (
                          <Link href='/' key={social}>
                            <Image
                              src={social}
                              alt='social'
                              width={24}
                              height={24}
                             />
                          </Link>
                        ))
                       }
                   </div>
                </FooterColumns>
            </div>
          </div>
          </div>

          <div className='bg-gray-20 border'/>
          <p className="regular-14 w-full text-center text-gray-30">
              2023 Hilink | All rights reserved
          </p>

        </div>
    </footer>
  )
}

type FooterLinksProps = {
  title: string
  children: React.ReactNode
}
const FooterColumns = ({title, children}:FooterLinksProps) => {
  return (
    <div className='flex flex-col gap-5'>
    <h4 className='bold-18 text-nowrap'>{ title } </h4>
    {children}
     
    </div>
  )
}

export default Footer