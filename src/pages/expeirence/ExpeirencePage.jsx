import './ui/ExpeirencePage.scss'
import ExperienceCard from "@/components/Cards/ExerienceCard/ExperienceCard";
import HeaderComponent from "@/components/Header/Header";

export default function ExpeirencePage() {
    return (
        <div className="ExpeirencePage">
            <HeaderComponent
                title={'Experience'}
            />

            <div className="ExpeirencePage_wrapper">
                <ExperienceCard
                    company={'freelancer'}
                    companyDescription={'Freelance intern-level frontend developer focused on building responsive and user-friendly web applications, while continuously expanding skills in modern web technologies.'}
                    endTime={'Present'}
                    location={'Tashkent'}
                    logo={'/freelancer.png'}
                    position={'Front end developer'}
                    startTime={'12.09.24'}
                    text={'Specializing in creating responsive and user-friendly web applications while enhancing proficiency in modern web technologies.'}

                />
            </div>
        </div>
    )
}