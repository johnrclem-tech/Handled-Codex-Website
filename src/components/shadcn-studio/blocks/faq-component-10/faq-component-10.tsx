'use client'

import { useEffect } from 'react'
import { HelpCircleIcon } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MotionPreset } from '@/components/ui/motion-preset'
import { cn } from '@/lib/utils'

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCardGridProps {
  label?: string
  heading: string
  description: string
  bgColor?: string
  faqItems: FAQItem[]
}

const FAQCardGrid = ({
  label,
  heading,
  description,
  bgColor,
  faqItems,
}: FAQCardGridProps) => {
  useEffect(() => {
    const all = document.querySelectorAll('.faq-card')
    const handleMouseMove = (ev: MouseEvent) => {
      all.forEach(e => {
        const blob = e.querySelector('.faq-blob') as HTMLElement
        const fblob = e.querySelector('.faq-fake-blob') as HTMLElement
        if (!blob || !fblob) return
        const rec = fblob.getBoundingClientRect()
        blob.style.opacity = '0.8'
        blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - 24 - rec.width / 2
              }px, ${ev.clientY - rec.top - 24 - rec.height / 2}px)`,
            },
          ],
          {
            duration: 300,
            fill: 'forwards',
          }
        )
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className={cn('py-8 sm:py-16 lg:py-24', bgColor)}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 sm:mb-16 lg:mb-24'>
          {label && (
            <MotionPreset
              component='p'
              className='section-label'
              fade
              blur
              transition={{ duration: 0.5 }}
            >
              {label}
            </MotionPreset>
          )}
          <MotionPreset
            component='h2'
            className='section-heading'
            fade
            blur
            transition={{ duration: 0.5 }}
          >
            {heading}
          </MotionPreset>
          <MotionPreset
            component='p'
            className='section-description'
            fade
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            {description}
          </MotionPreset>
        </div>
        {/* Masonry FAQ Grid */}
        <div className='columns-1 gap-6 sm:columns-2 lg:columns-3'>
          {faqItems.map((item, index) => (
            <MotionPreset
              className='bg-foreground/10 faq-card group relative mb-6 h-full break-inside-avoid overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out lg:col-span-3'
              fade
              key={index}
              blur
              transition={{ duration: 0.8 }}
              delay={0.6}
            >
              <Card className='group-hover:bg-card/90 h-full border-0 shadow-none transition-all duration-300 ease-in-out'>
                <CardHeader className='flex items-center justify-between gap-4'>
                  <h3 className='group-hover:text-primary font-semibold transition-colors duration-300'>
                    {item.question}
                  </h3>
                  <Avatar className='size-9'>
                    <AvatarFallback className='bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300'>
                      <HelpCircleIcon className='size-4' />
                    </AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <Separator />
                  <p className='text-muted-foreground text-sm'>{item.answer}</p>
                </CardContent>
              </Card>
              <div className='faq-blob bg-primary absolute top-0 left-0 -z-1 size-62.5 rounded-full opacity-0 blur-2xl transition-all duration-300 ease-in-out' />
              <div className='faq-fake-blob absolute top-0 left-0 -z-1 [display:hidden] size-40 rounded-full' />
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQCardGrid
