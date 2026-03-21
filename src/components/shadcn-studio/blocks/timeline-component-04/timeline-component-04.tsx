'use client'

import React, { useState } from 'react'
import { ArrowUpRightIcon } from 'lucide-react'
import {
  TimelineHorizontal,
  TimelineItemHorizontal,
  TimelineDotHorizontal,
  TimelineLineHorizontal,
  TimelineHeadingHorizontal,
} from '@/components/ui/timeline-horizontal'
import { MotionPreset } from '@/components/ui/motion-preset'
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'
import { cn } from '@/lib/utils'

export interface TimelineItem {
  title: string
  date: string
  employmentType: string
  period: string
  skills: string[]
  responsibilities: string[]
  headerBg?: string
}

export interface TimelineComponentProps {
  label?: string
  heading: string
  description: string
  bgColor?: string
  ctaText?: string
  ctaHref?: string
  data: TimelineItem[]
}

const TimelineComponent = ({
  heading,
  description,
  bgColor,
  ctaText = "Get a fulfillment quote",
  ctaHref = "#get-a-quote",
  data,
}: TimelineComponentProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = data[activeIndex]
  const cardBg = activeItem.headerBg || 'bg-primary'

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
          <div className={cn('mt-6 flex flex-col items-start gap-4 rounded-3xl p-2.5 md:mt-8.5 lg:mt-11.5 text-primary-foreground', cardBg)}>
            <div className="flex flex-col items-start pl-4">
              <MotionPreset
                key={`title-${activeIndex}`}
                fade
                blur
                slide={{ direction: 'down', offset: 30 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-primary-foreground">{activeItem.title}</h3>
              </MotionPreset>
              <MotionPreset
                key={`employment-${activeIndex}`}
                fade
                blur
                slide={{ direction: 'down', offset: 30 }}
                transition={{ duration: 0.5 }}
                delay={0.2}
                className="flex items-center gap-3 text-primary-foreground/80"
              >
                <p>{activeItem.employmentType}</p>
                <p>|</p>
                <p>{activeItem.period}</p>
              </MotionPreset>
            </div>
            <div className={cn('max-w-242.5 space-y-5 rounded-2xl p-5', cardBg)}>
              <MotionPreset
                key={`skills-${activeIndex}`}
                fade
                blur
                slide={{ direction: 'down', offset: 30 }}
                transition={{ duration: 0.5 }}
                delay={0.4}
              >
                <div className="flex flex-wrap items-center gap-3">
                  {activeItem.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="rounded-full border border-primary-foreground/30 px-3 py-1 text-center text-xs font-medium text-primary-foreground"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </MotionPreset>
              <MotionPreset
                key={`responsibilities-${activeIndex}`}
                fade
                blur
                slide={{ direction: 'down', offset: 30 }}
                transition={{ duration: 0.5 }}
                delay={0.6}
              >
                <div className="ml-2 flex flex-col items-start gap-3">
                  {activeItem.responsibilities.map((responsibility, index) => (
                    <MotionPreset
                      key={`responsibility-${activeIndex}-${index}`}
                      fade
                      blur
                      slide={{ direction: 'down', offset: 30 }}
                      transition={{ duration: 0.3 }}
                      delay={0.6 + index * 0.2}
                    >
                      <div className="flex items-start gap-2 py-1">
                        <div className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-foreground"></div>
                        <span className="text-base text-primary-foreground/90">{responsibility}</span>
                      </div>
                    </MotionPreset>
                  ))}
                </div>
              </MotionPreset>
              <MotionPreset
                key={`button-${activeIndex}`}
                className="mt-7"
                fade
                blur
                slide={{ direction: 'down', offset: 30 }}
                transition={{ duration: 0.5 }}
                delay={0.8}
              >
                <CraftButton size="sm" asChild>
                  <a href={ctaHref}>
                    <CraftButtonLabel>{ctaText}</CraftButtonLabel>
                    <CraftButtonIcon>
                      <ArrowUpRightIcon className="size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
                    </CraftButtonIcon>
                  </a>
                </CraftButton>
              </MotionPreset>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineComponent
