import * as React from 'react';
import { cn } from '@sohanemon/utils';
import { Iconify } from '@sohanemon/utils/components';

import { Button } from '@/components/ui/button';
import { Img } from '@/components/image';
import { Motion } from '@/components/motion';
import { TextReveal } from '@/components/text-reveal';

type HeroProps = React.ComponentProps<'div'>;

export function Hero({ className, ...props }: HeroProps) {
  return (
    <div
      {...props}
      className={cn('relative grid place-items-center ', className)}
    >
      <Img
        className="absolute -z-10 size-full object-cover"
        placeholder="shimmer"
        src="/banner.png"
        width={1400}
      />
      <div className="container grid grid-cols-2 items-center py-32">
        <Img className="scale-150" src="/hero.png" />
        <div className="flex flex-col gap-2 md:-mr-20">
          <div className="w-fit">
            <TextReveal className="whitespace-nowrap text-5xl font-black">
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
            className="text-balance text-xl font-medium "
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
                className="text-foreground/60 flex items-center gap-2 text-lg"
                initial="hidden"
                transition={{ delay: 1 + benefits.indexOf(benefit) * 0.1 }}
              >
                <Iconify className="text-foreground" icon="mdi:check-bold" />
                {benefit}
              </Motion>
            ))}
          </ul>
        </div>
        <Button
          className="col-span-full mx-auto mt-10 w-fit gap-3 px-4"
          size={'lg'}
        >
          <Iconify className="text-background" icon="uil:whatsapp-alt" />
          פנו אלינו בווטסאפ עוד היום לבירור זמינות ושיריון תאריכים
        </Button>
      </div>
    </div>
  );
}

const benefits = [
  'איסוף מתל קציר או הובלה בתוספת תשלום',
  'ניתן לרכוש דלק לפי תעריף התחנה הקרובה',
  'הספקים מ2800W עד 6000W',
];
