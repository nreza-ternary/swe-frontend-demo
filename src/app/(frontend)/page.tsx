import { Capabilities } from '@/components/Capabilities'
import Image from 'next/image'
import React from 'react'

// export const dynamic = 'force-dynamic'

interface Dog {
  message: string
  status: string
}

async function fetchDog(): Promise<Dog | null> {
  const dogRes = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: {
      revalidate: 10,
    },
  })
  if (dogRes.ok) {
    return dogRes.json()
  } else {
    return null
  }
}

export default async function HomePage() {
  const dog = await fetchDog()

  // console.log(dog)
  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  const cards = [
    {
      title: 'Design',
      description:
        "I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.",
    },
    {
      title: 'Engineering',
      description:
        "In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.",
    },
  ]

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
              // @ts-expect-error: dog is probably null
              src={dog.message}
              width={500}
              height={500}
              alt="DP"
            />
            <div className="absolute w-full h-[400px] border-[2px] -translate-y-[85%] translate-x-[15%] border-black z-10"></div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <Capabilities>
        {cards?.map((card, index) => (
          <div key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </Capabilities>
    </div>
  )
}
