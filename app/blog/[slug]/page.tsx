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
            <p className="text-sm text-gray-400">
                last modified {metadata.lastModified} - authored by {metadata.author} - {metadata.category}
            </p>
            <hr className="my-4 border-gray-800" />
            <Post />
        </div>
    )
}

export function generateStaticParams() {
    return [{ slug: 'example' }]
}

export const dynamicParams = false