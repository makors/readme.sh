import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-2xl font-bold pb-1">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold pb-1">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold pb-1">{children}</h3>,
    h4: ({ children }) => <h4 className="text-base font-bold pb-1">{children}</h4>,
    h5: ({ children }) => <h5 className="text-sm font-bold pb-1">{children}</h5>,
    h6: ({ children }) => <h6 className="text-xs font-bold pb-1">{children}</h6>,
    p: ({ children }) => <p className="text-base">{children}</p>,
    blockquote: ({ children }) => <blockquote className="text-base">{children}</blockquote>,
    code: ({ children }) => (
      <code className="bg-gray-900 p-2 w-full rounded-md my-4 block overflow-x-auto max-w-full">
        {children}
      </code>
    ),
    a: ({ href, ...props }) => <a {...props} href={href} className="underline text-sky-400" />,
    ...components,
  }
}