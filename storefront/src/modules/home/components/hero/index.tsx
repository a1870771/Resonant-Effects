import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative bg-gradient-to-r from-sky-100 to-blue-300">
      <div className="text-gray-900 absolute inset-56 left-80 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Hand-crafted effects pedals,<br/> made to order.
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Something short and snappy about the boutique nature of rfx.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <div className="absolute inset-y-36 right-80">
        <Image
          src="/klon-inside.png"
          width="525"
          height="702px"
          loading="eager"
          priority={true}
          quality={90}
          draggable="false"
        />
      </div>
      
    </div>
  )
}

export default Hero
