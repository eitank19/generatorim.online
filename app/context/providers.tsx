'use client';

import { TailwindIndicator } from '@sohanemon/utils/components';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <TailwindIndicator />
    </>
  );
}
