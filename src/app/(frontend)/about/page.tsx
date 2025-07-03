import Image from 'next/image'
import React from 'react'

export default async function HomePage() {
  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })

  return (
    <div className="h-screen">
      {/* Hero Section */}
      <div className="h-[90%] grid grid-cols-12">
        <div className="bg-[#92e5e7] col-span-8 flex items-center px-40">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-bold">
                Fronend
                <br />
                Developer.
              </h1>
              <p className="text-2xl max-w-[560px]">
                I like to craft solid and scalable frontend products with great user experiences.
              </p>
            </div>
            <div className="flex gap-10 max-w-[560px]">
              <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
              <p>
                Proven experience building successful products for clients across several countries.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#fffdcc] col-span-4 flex items-center">
          <div className="-translate-x-[50%]">
            <Image
              className="w-[400px] h-[400px] object-cover relative z-20"
              src={'/old-4508732_1280.jpg'}
              width={500}
              height={500}
              alt="DP"
            />
            <div className="absolute w-full h-[400px] border-[2px] -translate-y-[85%] translate-x-[15%] border-black z-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
