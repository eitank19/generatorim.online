import { Hero } from './_components/hero';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <section>
      <Hero />
    </section>
  );
}
