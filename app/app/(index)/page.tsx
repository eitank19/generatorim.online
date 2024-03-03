import strapi from '@/lib/strapi';

import { ThemeToggle } from './_components/theme-toggle';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  console.log('🔴 ~ IndexPage ~ strapi:', strapi);
  const data = await strapi.user

  console.log('💬 ~ IndexPage ~ data:', data);

  return (
    <section>
      <h4 className="mt-20 text-7xl ">
        Update Readme, Site.ts and package.json
      </h4>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <ThemeToggle />
    </section>
  );
}
