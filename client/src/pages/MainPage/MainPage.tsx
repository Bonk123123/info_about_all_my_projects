import React from 'react';
import PageTransition from '../../components/PageTransition/PageTransition';
import ArrowRight from '../../assets/arrow-right.svg';

const MainPage = React.memo(() => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const textRef = React.useRef<HTMLParagraphElement>(null);

    const [div, setDiv] = React.useState<HTMLDivElement>();

    const [nextText, setNextText] = React.useState(false);

    React.useEffect(() => {
        if (divRef.current) setDiv(divRef.current);
    }, [divRef]);

    React.useEffect(() => {
        setTimeout(() => {
            setNextText(true);
            textRef.current?.classList.remove('border-r-2');
        }, 3500);
    }, []);

    return (
        <div
            ref={divRef}
            className="w-full h-full flex justify-center duration-1000 items-center"
        >
            {div ? (
                <>
                    <PageTransition
                        elementToAnimate={div}
                        link="projects"
                        tailwindTransition="translate-y-[100vh]"
                        className="absolute rounded-lg text-white h-10 w-40 self-start border border-[blue] hover:bg-[blue] border-t-4 duration-75 animate-open overflow-hidden"
                    >
                        projects
                    </PageTransition>
                    <PageTransition
                        elementToAnimate={div}
                        link="information"
                        tailwindTransition="-translate-y-[100vh]"
                        className="absolute rounded-lg text-white h-10 w-40 self-end border hover:bg-[red] border-b-4 border-[red] duration-75 animate-open overflow-hidden"
                    >
                        information
                    </PageTransition>
                    <PageTransition
                        elementToAnimate={div}
                        link="secret"
                        tailwindTransition="-translate-x-[100vw]"
                        className="absolute rounded-lg text-white h-40 w-10 right-0 opacity-0 hover:opacity-100 duration-75 bg-[green]"
                    >
                        <img src={ArrowRight} alt="" />
                    </PageTransition>
                </>
            ) : (
                <></>
            )}

            <div className="flex flex-col w-full h-96 justify-center items-center">
                <p
                    ref={textRef}
                    className="text-sm md:text-3xl text-white border-r-2 overflow-hidden animate-[printText_2s_steps(22),cursor_0.75s_step-end_infinite] w-[22ch] whitespace-nowrap"
                >
                    Hi, my name is Arthur.
                </p>
                {nextText ? (
                    <p className="hidden sm:block sm:text-sm md:text-3xl text-white border-r-2 overflow-hidden animate-[printText_5s_steps(50),cursor_0.75s_step-end_infinite] w-[50ch] whitespace-nowrap">
                        I keep all the information about my projects here.
                    </p>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
});

export default MainPage;
