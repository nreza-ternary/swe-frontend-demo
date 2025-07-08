import { Capabilities } from '@/components/Capabilities'
import { Homepage, Media } from '@/payload-types'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'

async function fetchHomedata(): Promise<Homepage | null> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const homepage = payload.findGlobal({ slug: 'homepage' })
  return homepage
}

export default async function HomePage() {
  const home = await fetchHomedata()
  return (
    <div className="h-screen">
      {/* Hero Section */}
      <div className="h-[90%] grid grid-cols-12">
        <div className="bg-[#92e5e7] col-span-8 flex items-center px-40">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-bold">{home?.hero?.heading}</h1>
              <p className="text-2xl max-w-[560px]">{home?.hero?.description}</p>
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
              src={(home?.hero?.featuredImage as Media)?.url as string}
              width={(home?.hero?.featuredImage as Media)?.width as number}
              height={(home?.hero?.featuredImage as Media)?.height as number}
              alt={(home?.hero?.featuredImage as Media)?.alt as string}
            />
            <div className="absolute w-full h-[400px] border-[2px] -translate-y-[85%] translate-x-[15%] border-black z-10"></div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <Capabilities>
        {home?.capabilities?.map((card, index) => (
          <div key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </Capabilities>
    </div>
  )
}
