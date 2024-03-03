import { Hero } from './_components/hero';
import { Information } from './_components/informations';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <section>
      <Hero />
      <Information />
    </section>
  );
}
