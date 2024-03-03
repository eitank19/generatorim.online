import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import type { MiddlewareFactory } from '@/types/index.types';

export const withRedirect: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    if (request.nextUrl.pathname !== '/home') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return next(request, _next);
  };
};
