import Link from 'next/link';

export const WhatsappWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Link href="https://tinyurl.com/2p8xremf" target="_blank">
      {children}
    </Link>
  );
};
