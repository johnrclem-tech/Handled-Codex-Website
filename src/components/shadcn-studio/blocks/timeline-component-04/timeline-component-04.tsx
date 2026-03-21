'use client'

import React, { useState } from 'react'
import {
  TimelineHorizontal,
  TimelineItemHorizontal,
  TimelineDotHorizontal,
  TimelineLineHorizontal,
  TimelineHeadingHorizontal,
} from '@/components/ui/timeline-horizontal'
import { MotionPreset } from '@/components/ui/motion-preset'
import { cn } from '@/lib/utils'

export interface TimelineBullet {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface TimelineItem {
  title: string
  date: string
  stepLabel: string
  description: string
  bullets: TimelineBullet[]
  visual?: React.ReactNode
}

export interface TimelineComponentProps {
  label?: string
  heading: string
  description: string
  bgColor?: string
  data: TimelineItem[]
}

const TimelineComponent = ({
  heading,
  description,
  bgColor,
  data,
}: TimelineComponentProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = data[activeIndex]

  return (
    <section className={cn('py-8 sm:py-16 lg:py-24', bgColor)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-description mx-auto max-w-4xl">
            {description}
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="mx-auto flex max-w-[990px] flex-col items-center">
          <TimelineHorizontal
            className="w-full justify-center max-xl:max-w-9/10 max-sm:flex-row"
            defaultActiveIndex={0}
            animated={true}
            autoPlay={true}
            itemDurations={data.map(() => 5000)}
            onActiveIndexChange={setActiveIndex}
          >
            {data.map((item, index) => (
              <TimelineItemHorizontal
                key={index}
                headingPosition="top"
                className={`items-start max-sm:gap-4 md:max-xl:flex-1 ${index !== data.length - 1 ? 'xl:w-60' : ''}`}
              >
                <div className="mb-3 flex flex-col max-md:hidden">
                  <TimelineHeadingHorizontal variant="primary" className="lg:text-lg">
                    {item.title}
                  </TimelineHeadingHorizontal>
                  <p className="text-muted-foreground">{item.date}</p>
                </div>
                <div className="relative flex w-full items-center">
                  <TimelineDotHorizontal
                    status="custom"
                    className="group [&:not([data-active=true])]:bg-muted [&[data-active=true]]:bg-primary/10 size-4.5 rounded-full"
                  >
                    <span className="bg-muted-foreground group-data-[active=true]:bg-primary size-3 rounded-full"></span>
                  </TimelineDotHorizontal>
                  {index < data.length - 1 && (
                    <TimelineLineHorizontal className="h-0.5 w-full max-md:w-40 max-sm:w-20" />
                  )}
                </div>
              </TimelineItemHorizontal>
            ))}
          </TimelineHorizontal>

          {/* Card */}
          <div className="mt-6 w-full rounded-3xl bg-muted p-6 md:mt-8.5 md:p-8 lg:mt-11.5">
            <MotionPreset
              key={`step-${activeIndex}`}
              fade
              blur
              slide={{ direction: 'down', offset: 30 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-muted-foreground mb-1">{activeItem.stepLabel} · {activeItem.date}</p>
              <h3 className="card-title mb-3">{activeItem.title}</h3>
            </MotionPreset>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Text content */}
              <div>
                <MotionPreset
                  key={`desc-${activeIndex}`}
                  fade
                  blur
                  slide={{ direction: 'down', offset: 30 }}
                  transition={{ duration: 0.5 }}
                  delay={0.2}
                >
                  <p className="card-description mb-6">{activeItem.description}</p>
                </MotionPreset>

                <div className="space-y-4">
                  {activeItem.bullets.map((bullet, index) => (
                    <MotionPreset
                      key={`bullet-${activeIndex}-${index}`}
                      fade
                      blur
                      slide={{ direction: 'down', offset: 30 }}
                      transition={{ duration: 0.3 }}
                      delay={0.4 + index * 0.15}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <bullet.icon className="h-4 w-4 text-primary" />
                        </div>
                        <p className="feature-text pt-1">{bullet.text}</p>
                      </div>
                    </MotionPreset>
                  ))}
                </div>
              </div>

              {/* Visual */}
              {activeItem.visual && (
                <MotionPreset
                  key={`visual-${activeIndex}`}
                  fade
                  blur
                  slide={{ direction: 'up', offset: 30 }}
                  transition={{ duration: 0.5 }}
                  delay={0.3}
                  className="flex justify-center"
                >
                  {activeItem.visual}
                </MotionPreset>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineComponent
