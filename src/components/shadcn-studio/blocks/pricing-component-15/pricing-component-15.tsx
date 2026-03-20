import type { ComponentType } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export type Pricing3Plan = {
  name: string
  icon: ComponentType
  price?: number
  description: string
  features: string[]
  isHighlighted?: boolean
}

export type Pricing3Props = {
  label?: string
  heading?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  plans: Pricing3Plan[]
}

const Pricing3 = ({
  label = 'Pricing',
  heading = 'Choose the right plan for you',
  description: desc = 'Find the ideal plan that fits your budget and goals. Make informed choices with ease.',
  buttonText = 'Get a Quote',
  buttonHref = '#get-a-quote',
  plans,
}: Pricing3Props) => {
  return (
    <div className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:gap-24 lg:space-y-24 lg:px-8'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <p className='section-label'>{label}</p>
          <h2 className='section-heading'>{heading}</h2>
          <p className='section-description'>
            {desc}
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-8 lg:flex-row lg:items-stretch lg:space-y-0'>
          {plans.map((plan, index) => (
            <div className='w-full max-w-lg flex-1' key={index}>
              <Card
                key={index}
                className={cn('border-none py-8 shadow-md', {
                  'bg-primary shadow-none, border-none': plan.isHighlighted,
                  'lg:rounded-r-none': index === 0,
                  'lg:rounded-l-none': index === plans.length - 1
                })}
              >
                <CardContent className='flex flex-col gap-8 px-8'>
                  <div className='flex flex-col gap-4'>
                    <div
                      className={cn('bg-background flex size-14 items-center justify-center rounded-full p-1', {
                        'bg-primary/10': !plan.isHighlighted
                      })}
                    >
                      <plan.icon />
                    </div>
                    <h1 className={cn('text-3xl font-bold tracking-tight', { 'text-primary-foreground': plan.isHighlighted })}>
                      {plan.name}
                    </h1>
                    <p className={cn('card-description', { 'text-primary-foreground': plan.isHighlighted })}>
                      {plan.description}
                    </p>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    {plan.features.map((feature, i) => (
                      <div key={i} className='flex items-center gap-2 py-1'>
                        <div
                          className={cn('bg-primary flex size-4.5 items-center justify-center rounded-full p-0.5', {
                            'bg-background': plan.isHighlighted
                          })}
                        >
                          <ArrowRightIcon
                            className={cn('text-primary-foreground size-3', {
                              'text-foreground': plan.isHighlighted
                            })}
                          />
                        </div>
                        <span className={cn('feature-text', { 'text-primary-foreground': plan.isHighlighted })}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  {plan.isHighlighted && (
                    <Button size='lg' variant='secondary' asChild>
                      <Link href={buttonHref}>
                        {buttonText}
                        <ArrowRightIcon />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Pricing3
