import { ImageProps, Image } from "../../restyled/image";


export type DynamicImageProps = {
    source: string
} & Exclude<ImageProps, "source">

export function DynamicImage({ source, ...rest }: DynamicImageProps) {
    return <Image source={{ uri: source }} {...rest} />
}

export default DynamicImage;