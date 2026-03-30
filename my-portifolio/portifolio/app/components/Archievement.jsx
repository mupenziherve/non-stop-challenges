'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
})

const AwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2 text-sky-200"
  >
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle cx="12" cy="8" r="6" />
  </svg>
)

const achievementsList = [
  { metric: 'Projects', value: '100', postfix: '+' },
  { prefix: '~', metric: 'Users', value: '50' },
  { metric: 'Awards', value: '7', icon: <AwardIcon /> },
  { metric: 'Years', value: '3' },
]

const AchievementsSection = () => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setStart(true)
  }, [])

  return (
    <div className="py-8 px-4 sm:py-16 xl:px-16">

      <div className="border border-[#33353F] rounded-md py-8 px-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center gap-6">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="text-sky-200 text-4xl font-bold flex items-center justify-center">
              {achievement.prefix}

              <AnimatedNumbers
                includeComma
                animateToNumber={
                  start ? parseInt(achievement.value.replace(/,/g, '')) : 0
                }
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, i) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (i + 1),
                })}
              />

              {achievement.postfix}

              {achievement.icon}
            </h2>

            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchievementsSection
