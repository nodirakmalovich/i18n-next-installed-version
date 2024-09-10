import Image from "next/image";
import Link from "next/link";
import initTranslations from "../i18n";

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <div>
      <h1>{t("header")}</h1>
      <Link href={'/about-us'}> go to about page</Link>
    </div>
  );
}
