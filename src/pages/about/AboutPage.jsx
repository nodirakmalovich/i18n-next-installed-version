import initTranslations from '@/app/i18n';
import './ui/AboutPage.scss'
import HeaderComponent from "@/components/Header/Header";

export default async function AboutPage({ params }) {
    const locale = params?.locale;
    const { t } = await initTranslations(locale, ['home']);

    return (
        <section className="about_page">
            <HeaderComponent
                title={'About'}
            />

            <div className="about_page_wrapper">
                <div className="about_page_wrapper_title">
                    <p className='about_page_wrapper_title_text'>
                        {t('mission')}
                    </p>
                </div>
                <p className="about_page_wrapper_description">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel fugit id magnam dolorum architecto, rerum autem consequuntur eum consectetur atque pariatur velit repellendus cumque quibusdam provident. Debitis, quisquam quibusdam.
                   Harum quaerat suscipit soluta animi rerum praesentium asperiores dicta omnis dolorum facere ipsam, laborum et, natus saepe rem exercitationem odit vitae voluptatum, sed quo error voluptas enim autem impedit? Quod.
                   Repellat cupiditate alias praesentium expedita ullam iusto doloribus culpa eos quo dolorem, tenetur, delectus pariatur quibusdam tempora ex laborum veniam, aut voluptas exercitationem? Expedita voluptas sit facere quis quos doloremque.
                </p>

            </div>
        </section>
    )
}