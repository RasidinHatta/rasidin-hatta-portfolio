import React from 'react'
import { SiNextdotjs, SiReact } from 'react-icons/si'

const Description = () => {
    return (
        <>
            Designing and developing modern web applications with{" "}
            <span className="inline-flex items-center gap-1 text-primary font-semibold">
                <SiReact className="w-5 h-5 text-sky-400" />
                React
            </span>{" "}
            and{" "}
            <span className="inline-flex items-center gap-1 text-primary font-semibold">
                <SiNextdotjs className="w-5 h-5 text-foreground" />
                NextJS
            </span>
            , focusing on performance,&nbsp; scalability, and seamless user experience
            through interactive UI and secure backend integration.
        </>
    )
}

export default Description