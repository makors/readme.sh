import type { MDXComponents } from 'mdx/types'
import React from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const allComponents: MDXComponents = {
    h1: ({ children }) => <h1 className="text-2xl font-bold pb-2 pt-2">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold pb-2 pt-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold pb-2 pt-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-base font-bold pb-2 pt-2">{children}</h4>,
    h5: ({ children }) => <h5 className="text-sm font-bold pb-2 pt-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-xs font-bold pb-2 pt-2">{children}</h6>,
    blockquote: ({ children }) => <blockquote className="text-base border-l-4 border-gray-600 pl-4 italic my-4">{children}</blockquote>,
    a: ({ href, ...props }) => <a {...props} href={href} className="underline text-sky-400 hover:text-sky-300 transition-colors" />,
    code: ({ children }) => <code className="bg-gray-900 p-4 w-full rounded-md my-6 block overflow-x-auto max-w-full text-sm font-mono">{children}</code>,
    img: (props) => (
      <div className="my-8">
          <img {...props} className="rounded-lg mx-auto block max-w-full max-h-96" alt={props.alt ?? ""} />
          {props.alt && <div className="text-center text-sm text-gray-400 mt-1 mb-0">{props.alt}</div>}
      </div>
    ),
    ul: ({ children }) => <ul className="mb-4 pl-6 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 pl-6 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    
    ...components,
  }

  allComponents.p = ({ children }) => {
    const childrenArray = React.Children.toArray(children);

    if (
      childrenArray.length === 1 &&
      React.isValidElement(childrenArray[0]) &&
      (childrenArray[0].type as any) === allComponents.img
    ) {
      return <>{childrenArray[0]}</>
    }

    return <p className="text-base mb-4 leading-relaxed">{children}</p>
  }

  return allComponents
}