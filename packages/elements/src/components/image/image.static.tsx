import { images } from "../../theme/assets";
import { ImageProps, Image } from "../../restyled/image";

export type StaticImageProps = {
    source: keyof typeof images
} & Omit<ImageProps, "source">

export function StaticImage({ source, ...rest }: StaticImageProps) {
    return <Image source={images[source]} {...rest} />
}

export default StaticImage;