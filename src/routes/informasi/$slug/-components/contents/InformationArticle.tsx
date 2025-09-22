import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { Route } from '@routes/informasi/$slug/index'
import React from 'react'

const InformationArticle = () => {
  const information = Route.useLoaderData()
  const contents = information.contents

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: ({ node, className, ...props }) => <p className="pb-4 text-lg" {...props} />,
          a: ({ node, className, ...props }) => (
            <a className="text-blue-700 underline transition hover:text-blue-500" {...props} />
          ),
          ol: ({ node, className, ...props }) => <ol className="list-decimal" {...props} />,
          li: ({ children }) => {
            const childrenArray = React.Children.toArray(children)

            return (
              <li className="list-inside">
                {childrenArray.map((child, idx) => {
                  if (idx === 0 && React.isValidElement(child)) {
                    const props = child.props as any
                    if (props.node?.tagName === 'p') {
                      return (
                        <p className="ml-2 inline pt-8 pb-4 text-lg font-medium">
                          {props.children}
                        </p>
                      )
                    }
                  }

                  if (React.isValidElement(child)) {
                    const props = child.props as any

                    return <p className="py-4 text-lg">{props.children}</p>
                  }
                })}
              </li>
            )
          },
        }}
      >
        {contents}
      </ReactMarkdown>
    </article>
  )
}

export default InformationArticle
