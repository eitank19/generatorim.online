'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@sohanemon/utils';

import useNavToggle from '@/hooks/nav-toggle';

import { Brand } from './brand';
import { Motion } from './motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { hidden, leaved } = useNavToggle();

  return (
    <Motion
      animate={hidden ? 'top' : 'visible'}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={cn('bg-background fixed inset-x-0 top-0 z-40', {
        'shadow-lg shadow-foreground/10  bg-background/50 backdrop-blur-md':
          leaved,
      })}
    >
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Brand />
        </div>
        <NavContent />
      </nav>
    </Motion>
  );
}

const NavContent = () => {
  const path = usePathname();
  return <></>;
};
