import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export interface FAQColumnItem {
  question: string
  answer: string
}

export interface FAQCardColumnProps {
  label?: string
  heading: string
  description: string
  bgColor?: string
  faqItems: FAQColumnItem[]
}

const FAQCardColumn = ({
  label,
  heading,
  description,
  bgColor,
  faqItems,
}: FAQCardColumnProps) => {
  return (
    <section className={cn('py-8 sm:py-16 lg:py-24', bgColor)}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* FAQ Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          {label && <p className='section-label'>{label}</p>}
          <h2 className='section-heading'>{heading}</h2>
          <p className='section-description'>{description}</p>
        </div>
        <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className='text-lg'>{item.question}</AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQCardColumn
