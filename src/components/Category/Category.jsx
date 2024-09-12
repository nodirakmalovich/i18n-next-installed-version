import Link from 'next/link'
import './ui/Category.scss'

export default function CategoryComponent({ image, title }) {
    return (
        <Link href={`/${title}`} className='category_component'>
            <img className='category_component_image' src={image} alt={title} />
            <p className="category_component_title">
                {title}
            </p>
        </Link>
    )
}