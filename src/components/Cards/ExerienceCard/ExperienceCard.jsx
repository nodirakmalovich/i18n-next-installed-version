
import './ui/ExperienceCard.scss'
export default function ExperienceCard({ logo, company, position, companyDescription, text, startTime, endTime, location }) {
    return (
        <div className="ExperienceCard">
            <div className='ExperienceCard_wrapper'>
                
                <div className="ExperienceCard_top">
                    <img className='ExperienceCard_top_image' src={logo} alt={company} />
                    <p className="ExperienceCard_top_name">
                        {company}
                    </p>
    
                    <p className="ExperienceCard_top_position">
                        {position}
                    </p>
                </div>
    
                <div className="ExperienceCard_middle">
                    <p className="ExperienceCard_middle_description">
                        {companyDescription}
                    </p>
                    <p className="ExperienceCard_middle_text">
                        {text}
                    </p>
                </div>
            </div>


            <div className="ExperienceCard_bottom">
                <p className="ExperienceCard_bottom_work">
                    {startTime} - {endTime}
                </p>
                <p className='px-[5px]'>|</p>
                <p className="ExperienceCard_bottom_location">
                    {location}
                </p>
            </div>

        </div>
    )
}