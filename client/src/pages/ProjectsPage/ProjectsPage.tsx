import React from 'react';
import Container from '../../components/Container/Container';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Modal from '../../components/Modal/Modal';
import IProject from '../../model/IProject';

const ProjectsPage = React.memo(() => {
    // const divRef = React.useRef<HTMLDivElement>(null);

    const [projects, setProjects] = React.useState<IProject[]>([]);

    React.useEffect(() => {
        fetch('http://localhost:5005/projects')
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    // const [isClicked, setIsClicked] = React.useState(true);

    const [showModals, setShowModals] = React.useState<
        { name: string; zIndex: number }[]
    >([]);

    React.useEffect(() => {
        console.log(showModals);
    }, [showModals]);

    // const [scroll, setScroll] = React.useState({ startX: 0, scrollLeft: 0 });

    // const handleStartMoveSlider = (
    //     e: React.MouseEvent<HTMLDivElement, MouseEvent>
    // ) => {
    //     document.body.style.cursor = 'grabbing';

    //     if (!divRef.current) return;
    //     const startX = e.pageX - divRef.current.offsetLeft;
    //     const scrollLeft = divRef.current.scrollLeft;
    //     setScroll({ startX, scrollLeft });
    //     setIsClicked(true);
    // };

    // const handleFinishMoveSlider = () => {
    //     document.body.style.cursor = 'default';

    //     setIsClicked(false);
    // };

    // const handleMoveSlider = (
    //     e: React.MouseEvent<HTMLDivElement, MouseEvent>
    // ) => {
    //     if (!isClicked) return;
    //     e.preventDefault();
    //     if (!divRef.current) return;

    //     const slider = divRef.current;
    //     const x = e.pageX - slider.offsetLeft;
    //     const walkX = x - scroll.startX;
    //     slider.scrollLeft = scroll.scrollLeft - walkX;
    // };

    return (
        <Container
            color="blue"
            tailwindTransitionOnClose="-translate-y-[100vh]"
        >
            <div className="p-3 pt-7 xl:py-3 h-full">
                <div
                    // ref={divRef}
                    className="flex h-[100%] w-[100%] flex-col overflow-y-auto xl:flex-row xl:overflow-y-clip xl:overflow-x-auto px-[2px] pt-[2px] pb-3"
                >
                    <div className="grid grid-cols-1 pr-2 xl:pr-0 sm:grid-cols-2 xl:flex gap-3">
                        {projects.map((project, i) => (
                            <ProjectCard
                                key={i + '1'}
                                name={project.name}
                                description={project.description}
                                img={project.img}
                                imgGif={project.imgGif}
                                stack={project.stack}
                                onClick={() =>
                                    setShowModals((prev) =>
                                        prev.find(
                                            (item) => item.name === project.name
                                        )
                                            ? prev
                                            : [
                                                  ...prev,
                                                  {
                                                      name: project.name,
                                                      zIndex: 50,
                                                  },
                                              ]
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
            {showModals?.map((item) => (
                <Modal
                    key={item.name}
                    color="blue"
                    onClose={() =>
                        setShowModals((prev) =>
                            prev.filter((modal) => modal.name !== item.name)
                        )
                    }
                    ProjectName={item.name}
                    zIndex={item.zIndex}
                    onClick={() =>
                        setShowModals((prev) =>
                            prev.map((modals) =>
                                modals.name === item.name
                                    ? { name: modals.name, zIndex: 60 }
                                    : { name: modals.name, zIndex: 50 }
                            )
                        )
                    }
                />
            ))}
        </Container>
    );
});

export default ProjectsPage;
