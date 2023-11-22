import React from 'react';
import { useNavigate } from 'react-router-dom';

interface props {
    elementToAnimate: HTMLElement;
    link: string;
    tailwindTransition: string;
    pageTransitionTime?: number;
    pageTransitionOffsetTime?: number;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const PageTransition: React.FC<props> = React.memo(
    ({
        elementToAnimate,
        link,
        tailwindTransition,
        pageTransitionTime,
        pageTransitionOffsetTime,
        children,
        className,
        onClick,
    }) => {
        const navigate = useNavigate();

        const handleAnimate = () => {
            if (onClick) onClick();
            if (pageTransitionOffsetTime) {
                setTimeout(() => {
                    elementToAnimate.classList.toggle(tailwindTransition);
                }, pageTransitionOffsetTime);
            } else {
                elementToAnimate.classList.toggle(tailwindTransition);
            }
            setTimeout(
                () => {
                    navigate(link);
                },
                pageTransitionTime ? pageTransitionTime : 1000
            );
        };

        return (
            <button className={className} onClick={handleAnimate}>
                {children}
            </button>
        );
    }
);

export default PageTransition;
