import { useMediaQuery } from "react-responsive"

export default function GetDeviceType()
{
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
    return import.meta.env.DEV ? "desktop" : isDesktop ? 'desktop' : isMobile ? 'mobile' : ""
}