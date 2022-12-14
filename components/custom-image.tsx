import Image from "next/image"

type Props = {
    src?: any
    className?: string
    alt?: string
    width: number
    height: number
}

export const CustomImage = ({ src, className, alt, width, height, ...props }: Props) => {
    if (src === "") return null
    const filePath = decodeURI(src.replace("/img/", ""))
    return (
        <Image
            src={`/static/images/${filePath}`}
            width={width}
            height={height}
            layout="responsive"
            className={className}
            alt={alt ?? ""}
        />
    );
};