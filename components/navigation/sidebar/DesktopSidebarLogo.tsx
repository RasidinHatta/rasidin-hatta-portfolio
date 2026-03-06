import Link from "next/link";
import { motion } from "motion/react";

interface DesktopSidebarLogoProps {
    open: boolean;
}

const DesktopSidebarLogo = ({ open }: DesktopSidebarLogoProps) => {
    return (
        <div className="flex h-16 items-start justify-between px-2 pt-2">
            <div className="flex-1 overflow-hidden">
                <Link
                    href="/"
                    className="flex items-center gap-2 cursor-target"
                >
                    {/* Icon mark — always visible */}
                    <span className="font-black text-lg text-foreground shrink-0 leading-none">R</span>

                    {/* Full name — animate in/out with sidebar */}
                    <motion.span
                        animate={{
                            display: open ? "inline-block" : "none",
                            opacity: open ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="font-bold text-base text-foreground whitespace-nowrap"
                    >
                        asidin
                    </motion.span>
                </Link>
            </div>
        </div>
    );
};

export default DesktopSidebarLogo;
