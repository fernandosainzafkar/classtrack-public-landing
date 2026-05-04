import { Card, CardContent } from '@/components/ui/card'
import { Rating } from '@/components/ui/rating'

type Testimonial = {
  name: string
  rating: number
  content: string
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className='w-96 shrink-0 shadow-none hover:shadow-md'>
      <CardContent className='space-y-4'>
        <div className='flex items-center justify-between gap-3'>
          <div className='flex gap-1'>
            <Rating readOnly variant='yellow' size={22} value={testimonial.rating} precision={0.5} />
            <span className='sr-only'>{testimonial.rating} out of 5 stars</span>
          </div>
        </div>

        <p>{testimonial.content}</p>

        <div className='flex items-center gap-3'>
          <div className='space-y-0.5'>
            <h3 className='font-medium'>{testimonial.name}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard
