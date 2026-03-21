'use client'

import React, { useRef, useState, useEffect, type ReactNode } from 'react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent, useSpring, useTransform } from 'motion/react'
import { MotionPreset } from '@/components/ui/motion-preset'
import { cn } from '@/lib/utils'

export interface ScrollingFeature {
  stepLabel?: string
  badge?: string
  title: string
  description: string
  bullets?: {
    icon: React.ComponentType<{ className?: string }>
    text: string
  }[]
  visual?: ReactNode
}

export interface FeaturesSection24Props {
  label?: string
  heading: string
  description: string
  bgColor?: string
  features: ScrollingFeature[]
}

const FeatureItem = ({
  feature,
  index,
  totalFeatures,
  scrollYProgress,
}: {
  feature: ScrollingFeature
  index: number
  totalFeatures: number
  scrollYProgress: any
}) => {
  const start = index / totalFeatures
  const middle = (index + 0.5) / totalFeatures
  const end = (index + 1) / totalFeatures

  const isFirst = index === 0
  const isLast = index === totalFeatures - 1

  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, middle - 0.05, middle + 0.05, end]
      : isLast
        ? [start, middle - 0.05, middle + 0.05, 1]
        : [start, middle - 0.05, middle + 0.05, end],
    isFirst ? [1, 1, 1, 0.3] : isLast ? [0.3, 1, 1, 1] : [0.3, 1, 1, 0.3]
  )

  const y = useTransform(
    scrollYProgress,
    isFirst ? [0, middle, end] : isLast ? [start, middle, 1] : [start, middle, end],
    isFirst ? [0, 0, -30] : isLast ? [30, 0, 0] : [30, 0, -30]
  )

  return (
    <motion.div style={{ opacity, y }} className="flex h-125 items-center justify-center">
      <div className="space-y-4">
        {feature.stepLabel && (
          <p className="text-sm font-medium text-muted-foreground">
            {feature.stepLabel}
            {feature.badge && <> · {feature.badge}</>}
          </p>
        )}
        <h3 className="card-title">{feature.title}</h3>
        <p className="card-description">{feature.description}</p>

        {feature.bullets && feature.bullets.length > 0 && (
          <div className="space-y-3 pt-2">
            {feature.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <bullet.icon className="h-4 w-4 text-primary" />
                </div>
                <p className="feature-text pt-1">{bullet.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const FeaturesSection24 = ({
  label,
  heading,
  description,
  bgColor,
  features,
}: FeaturesSection24Props) => {
  const [activeVisualIndex, setActiveVisualIndex] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const newIndex = Math.min(Math.floor(progress * features.length), features.length - 1)
    setActiveVisualIndex(newIndex)
  })

  const diamondRotationRaw = useTransform(scrollYProgress, (progress) => {
    const currentIndex = Math.min(Math.floor(progress * features.length), features.length - 1)
    return currentIndex * 360
  })

  const diamondRotation = useSpring(diamondRotationRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section className={cn('py-8 sm:py-16 lg:py-24', bgColor)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          {label && (
            <MotionPreset
              className="section-label"
              fade
              slide={{ direction: 'down' }}
              transition={{ duration: 0.5 }}
            >
              {label}
            </MotionPreset>
          )}
          <MotionPreset
            component="h2"
            className="section-heading"
            fade
            slide={{ direction: 'down' }}
            transition={{ duration: 0.5 }}
            delay={0.2}
          >
            {heading}
          </MotionPreset>
          <MotionPreset
            component="p"
            className="section-description"
            fade
            slide={{ direction: 'down' }}
            transition={{ duration: 0.5 }}
            delay={0.4}
          >
            {description}
          </MotionPreset>
        </div>

        {/* Features Grid */}
        <MotionPreset delay={0.6} fade slide={{ direction: 'down' }} transition={{ duration: 0.5 }}>
          <div ref={containerRef} className="grid gap-6 md:grid-cols-2">
            {/* Desktop: Sticky scroll features */}
            <div className="relative hidden w-full space-y-20 px-6 py-20 md:block">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  feature={feature}
                  index={index}
                  totalFeatures={features.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* Desktop: Sticky scroll visuals */}
            <div className="bg-muted relative hidden w-full items-center justify-center space-y-20 rounded-xl px-6 py-20 md:block">
              <div className="bg-card sticky top-[20vh] flex h-125 items-center justify-center overflow-hidden rounded-xl border">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVisualIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                  >
                    {features[activeVisualIndex]?.visual}
                  </motion.div>
                </AnimatePresence>
                {['top-4.5 left-4.5', 'top-4.5 right-4.5', 'bottom-4.5 left-4.5', 'bottom-4.5 right-4.5'].map(
                  (position, idx) => (
                    <motion.svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      className={cn('absolute', position)}
                      style={{ rotate: diamondRotation }}
                    >
                      <path d="M5 0L10 6L5 12L0 6L5 0Z" fill="var(--primary)" />
                    </motion.svg>
                  )
                )}
              </div>
            </div>

            {/* Mobile: Simple stacked layout */}
            <div className="flex flex-col gap-16 md:hidden">
              {features.map((feature, index) => (
                <div key={index} className="space-y-6">
                  {feature.visual && (
                    <div className="bg-muted relative rounded-xl px-6 py-12">
                      <div className="bg-card flex h-72 items-center justify-center overflow-hidden rounded-xl border">
                        <div className="flex items-center justify-center p-4">
                          {feature.visual}
                        </div>
                        {['top-4.5 left-4.5', 'top-4.5 right-4.5', 'bottom-4.5 left-4.5', 'bottom-4.5 right-4.5'].map(
                          (position, idx) => (
                            <svg
                              key={idx}
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="12"
                              viewBox="0 0 10 12"
                              fill="none"
                              className={cn('absolute', position)}
                            >
                              <path d="M5 0L10 6L5 12L0 6L5 0Z" fill="var(--primary)" />
                            </svg>
                          )
                        )}
                      </div>
                    </div>
                  )}
                  <div className="space-y-4 px-1">
                    {feature.stepLabel && (
                      <p className="text-sm font-medium text-muted-foreground">
                        {feature.stepLabel}
                        {feature.badge && <> · {feature.badge}</>}
                      </p>
                    )}
                    <h3 className="card-title">{feature.title}</h3>
                    <p className="card-description">{feature.description}</p>
                    {feature.bullets && feature.bullets.length > 0 && (
                      <div className="space-y-3 pt-2">
                        {feature.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              <bullet.icon className="h-4 w-4 text-primary" />
                            </div>
                            <p className="feature-text pt-1">{bullet.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default FeaturesSection24
