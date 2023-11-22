import React from 'react';
import PageTransition from '../PageTransition/PageTransition';
import Close from '../../assets/close.svg';

interface props {
    color: string;
    tailwindTransitionOnClose: string;
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
}

const Container: React.FC<props> = React.memo(
    ({ color, tailwindTransitionOnClose, children, className }) => {
        const divRef = React.useRef<HTMLDivElement>(null);
        const modalRef = React.useRef<HTMLDivElement>(null);

        const [div, setDiv] = React.useState<HTMLDivElement>();

        const handleCloseModal = () => {
            if (!modalRef.current) return;
            modalRef.current.classList.remove('animate-open', 'h-[90vh]');
            modalRef.current.classList.add('animate-close', 'h-0');
        };

        React.useEffect(() => {
            if (divRef.current) setDiv(divRef.current);
        }, [divRef]);

        return (
            <div
                ref={divRef}
                className={
                    'w-full h-full flex justify-center duration-1000 items-center ' +
                    className
                }
            >
                <div
                    ref={modalRef}
                    style={{ borderColor: color }}
                    className="h-[90vh] w-[95vw]  rounded-lg relative border border-b-[20px] animate-open overflow-hidden text-white text-center"
                >
                    {div ? (
                        <span
                            className="absolute rounded right-1 top-1 w-5 h-5 z-50"
                            style={{ backgroundColor: color }}
                        >
                            <PageTransition
                                elementToAnimate={div}
                                link="/"
                                tailwindTransition={tailwindTransitionOnClose}
                                pageTransitionTime={2000}
                                pageTransitionOffsetTime={700}
                                onClick={handleCloseModal}
                            >
                                <img src={Close} alt="" />
                            </PageTransition>
                        </span>
                    ) : (
                        <></>
                    )}

                    {children}
                </div>
            </div>
        );
    }
);

export default Container;
