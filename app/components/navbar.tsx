'use client';

import { cn } from '@sohanemon/utils';

import useNavToggle from '@/hooks/nav-toggle';

import { Brand } from './brand';
import { Motion } from './motion';
import { Button } from './ui/button';
import { WhatsappWrapper } from './whatsapp-wrapper';

export function Navbar() {
  const { hidden, leaved } = useNavToggle();

  return (
    <Motion
      animate={hidden ? 'top' : 'visible'}
      initial="top-full"
      transition={{ delay: 0.1, duration: 0.5 }}
      className={cn('bg-background sticky inset-x-0 top-0 z-40', {
        'shadow-lg shadow-foreground/10  bg-background/50 backdrop-blur-md':
          leaved,
      })}
    >
      <nav className="container flex items-center justify-between py-4">
        <NavContent />
        <div className="flex items-center gap-4">
          <Brand />
        </div>
      </nav>
    </Motion>
  );
}

const NavContent = () => {
  return (
    <div className="flex items-center gap-2.5">
      <WhatsappWrapper>
        <Button variant={'outline'}>מחירון ללילה</Button>
      </WhatsappWrapper>
      <WhatsappWrapper>
        <Button className="max-md:hidden">לתיאום הזמנה</Button>
      </WhatsappWrapper>
    </div>
  );
};
