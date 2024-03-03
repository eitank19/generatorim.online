import * as React from 'react';
import { cn } from '@sohanemon/utils';
import { Iconify } from '@sohanemon/utils/components';

import { Img } from '@/components/image';
import { Motion } from '@/components/motion';
import { TextReveal } from '@/components/text-reveal';

type HeroProps = React.ComponentProps<'div'>;

export function Hero({ className, ...props }: HeroProps) {
  return (
    <div {...props} className={cn('relative  ', className)}>
      <Img
        className="absolute -z-10 w-full object-cover"
        src="/banner.png"
        width={1400}
      />
      <div className="container grid grid-cols-2 items-center">
        <Img src="/hero.png" />
        <div className="flex flex-col gap-2">
          <div className="w-fit">
            <TextReveal className="text-3xl font-black">
              השכרת גנרטור לכל מטרה
            </TextReveal>
            <Motion
              className="bg-foreground mt-2 h-0.5 origin-left"
              initial={['shrinked', 'hidden']}
              transition={{ delay: 1 }}
            />
          </div>
          <Motion
            as="p"
            className="font-medium leading-6"
            initial="hidden"
            transition={{ delay: 1 }}
          >
            גנרטורים זמינים מיידית בעמק הירדן לקמפינג, מסיבות, אירועים, עבודה
            וכד’
          </Motion>
          <ul>
            {benefits.map((benefit) => (
              <Motion
                key={benefit}
                as="li"
                className="text-foreground/60 flex items-center gap-2"
                initial="hidden"
                transition={{ delay: 1 + benefits.indexOf(benefit) * 0.1 }}
              >
                <Iconify className="text-foreground" icon="mdi:check-bold" />
                {benefit}
              </Motion>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const benefits = [
  'איסוף מתל קציר או הובלה בתוספת תשלום',
  'ניתן לרכוש דלק לפי תעריף התחנה הקרובה',
  'הספקים מ2800W עד 6000W',
];
