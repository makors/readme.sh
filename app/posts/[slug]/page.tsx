import { Calendar, Tag, User } from "lucide-react"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post, metadata } = await import(`@/content/${slug}.mdx`)

    return (
        <div>
            <h1 className="text-xl">
                {metadata.title}
            </h1>
            <p className="text-sm text-gray-400 flex items-center gap-1">
                <Calendar className="size-4" /> {metadata.lastModified} - <User className="size-4" /> {metadata.author} - <Tag className="size-4" /> {metadata.category}
            </p>
            <hr className="my-4 border-gray-800 w-2/3 border-dashed" />
            <Post />
        </div>
    )
}

export function generateStaticParams() {
    return [{ slug: 'cups-label-printer' }]
}

export const dynamicParams = false