import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: { locale, gameName = 'pokedoku' }}: any) {
  const t = await getTranslations({ locale, namespace: `${gameName}.meta` });
  const canonical = process.env.NEXT_PUBLIC_SITE_URL + locale + '/' + gameName; 

  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical },
  };
}

export default async function Layout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return children
}