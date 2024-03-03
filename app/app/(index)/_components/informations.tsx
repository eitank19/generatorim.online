import * as React from 'react';

import { Motion } from '@/components/motion';
import { WhatsappWrapper } from '@/components/whatsapp-wrapper';

type InformationProps = React.ComponentProps<'div'>;

export function Information({ className, ...props }: InformationProps) {
  return (
    <div {...props}>
      <div className="p-3 px-10 text-center text-2xl font-bold">
        גנרטורים להשכרה באיזור הכנרת והסביבה - ההשכרה היא מגיל 18+ ובתמורה
        למסירת פיקדון
      </div>
      <div className="bg-secondary">
        <div className=" container grid-cols-4 gap-10 py-9 max-md:space-y-10 max-md:text-center lg:grid">
          {data.map((el, idx) => (
            <Motion
              key={el.label}
              className="mx-auto max-w-64 text-2xl leading-normal *:text-balance"
              initial={'hidden'}
              transition={{ delay: 1 + 0.2 * idx }}
            >
              <h4 className="font-bold">{el.label}</h4>
              <p>{el.description}</p>
              <WhatsappWrapper>
                <p className="text-primary pt-1 font-bold underline md:pt-3">
                  {el.action}
                </p>
              </WhatsappWrapper>
            </Motion>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    label: `גנרטור שקט
2800W-3200W`,
    description: `1-2 לילות: 300 ש”ח
3+ לילות: 250 ש”ח`,
    action: 'גנרטור להשכרה',
  },
  {
    label: `ציוד קמפינג והגברה
נוסף זמין להשכרה`,
    description: `רמקולים, סאבוופרים,
מאווררים ועוד..`,
    action: 'הגברה להשכרה',
  },
  {
    label: `הובלה בעמק
המחיר הוא לכיוון`,
    description: `דרום הכנרת: 70 ש”ח
צפון הכנרת: 120 ש”ח`,
    action: 'גנרטור והובלה',
  },
  {
    label: `גנרטור מושתק
3500W-4000W`,
    description: `1-2 לילות: 350 ש”ח
3+ לילות: 300 ש”ח`,
    action: 'השכרה של גנרטור',
  },
];
