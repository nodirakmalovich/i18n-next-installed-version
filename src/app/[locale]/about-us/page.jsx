import Link from "next/link";

export default function aboutUs() {
    return (
        <div>
            <h1>Welcome to about page!</h1>
            <Link href={'/'}> go to home page</Link>
        </div>
    )
}