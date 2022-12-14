import ReactMarkdown from "react-markdown"
import { CustomImage } from "./custom-image"
import gfm from "remark-gfm"

type Props = {
    source: string
    src?: string
    className?: string
}

const encodeMarkdownURIs = (source = '') => {
    const markdownLinkRegex = /\[(.+)\]\((.+)(".+)\)/g
    return source.replace(markdownLinkRegex, (match, linkURI) => {
        if (!linkURI) return match
        const replaced = match.replace(linkURI, encodeURI(linkURI))
        return replaced
    })
}

export const Content = ({ source, src, className = '' }: Props) => {
    return <ReactMarkdown
        className={`Content ${className}`}
        components={{
            img: ({ ...props }) => <CustomImage {...props} width={1305} height={932} />
        }}
        remarkPlugins={[gfm]}>
        {encodeMarkdownURIs(source)}
    </ReactMarkdown>
}