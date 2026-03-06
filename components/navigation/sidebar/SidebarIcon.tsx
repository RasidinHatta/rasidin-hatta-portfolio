interface SidebarIconProps {
    src?: string;
    alt: string;
    className?: string;
}

const SidebarIcon = ({ src, alt, className = "h-5 w-5 shrink-0" }: SidebarIconProps) => {
    if (!src) {
        return <div className={`${className} bg-gray-300 dark:bg-neutral-600 rounded`} />;
    }

    return <img src={src} alt={alt} className={`${className} dark:invert`} />;
};

export default SidebarIcon;
