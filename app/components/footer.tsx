import * as React from 'react';

type FooterProps = React.ComponentProps<'div'>;

export function Footer({ className, ...props }: FooterProps) {
  return (
    <div className="bg-black" {...props}>
      <footer className="container flex items-center gap-2 py-4 text-lg max-md:flex-col md:justify-between md:py-3">
        <p>ניתן ליצור קשר במס’: 050-641-8602</p>
        <p>© כל הזכויות שמורות לגנרטורים אונליין</p>
      </footer>
    </div>
  );
}
