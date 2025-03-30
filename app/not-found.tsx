import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col text-center h-full pt-[20%]">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-gray-400">page not found</p>
            <Link href="/" className="text-gray-200 underline pt-4">
                go back to the home page?
            </Link>
        </div>
    )
}
