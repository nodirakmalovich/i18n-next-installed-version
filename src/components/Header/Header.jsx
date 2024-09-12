import './ui/Header.scss'
export default function HeaderComponent({title}){
    return (
        <div className="HeaderComponent">
            <p className="HeaderComponent_text">
                {title}
            </p>
        </div>
    )
}