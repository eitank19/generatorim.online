import { Motion } from '@/components/motion';

interface RootTemplateProps {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: RootTemplateProps) {
  return (
    <>
      <Motion
        initial="hidden"
        transition={{
          when: 'beforeChildren',
          duration: 0.4,
          ease: 'easeInOut',
        }}
      >
        {children}
      </Motion>
    </>
  );
}
