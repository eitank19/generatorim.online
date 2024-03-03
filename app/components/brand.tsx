import { HtmlHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@sohanemon/utils';

import { Img } from './image';

interface CompType {}

export function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  return (
    <Link href={'/'} {...props} className={cn('', {}, className)}>
      <Img className="max-md:hidden" src="/logo.svg" />
      <Img className="md:hidden" src="/logo-m.svg" />
    </Link>
  );
}
