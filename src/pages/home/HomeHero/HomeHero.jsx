import './ui/HomeHero.scss'

export default function HomeHero() {

    return (
        <section className="HomeHero bg-black w-full h-[100vh]">
            <div className="HomeHero_wrapper">
                <p className='HomeHero_wrapper_header'>
                    I want to make <span className='HomeHero_wrapper_header_teal'>things</span> <br />
                    that <span className='HomeHero_wrapper_header_underline'>make a difference.</span>
                </p>
            </div>

        </section>
    )
}