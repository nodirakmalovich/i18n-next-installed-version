import NavbarData from '@/data/navbar/NavbarData';
import './ui/LeftSide.scss'
import Link from "next/link";
import CategoryComponent from '../Category/Category';

export default function LeftSide() {
    return (
        <div className="LeftSide">
            <div className="LeftSide_top">
                <Link href={'/'} className='LeftSide_top_title'>
                    Nodir <br />
                    Akmalovich

                </Link>
                <p className='LeftSide_top_job'>
                    Front End Engineer
                </p>
            </div>
            <div className="LeftSide_bottom">
                <ul className='LeftSide_bottom_menu'>
                    {
                        NavbarData.map((data, index) => {
                            return (
                                <li key={index}>
                                    <CategoryComponent
                                        title={ data.title}
                                        image={data.image}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}