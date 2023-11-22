import React from 'react';
import Close from '../../assets/close.svg';
import IProject from '../../model/IProject';

interface props {
    color: string;
    onClose: () => void;
    zIndex: number;
    onClick?: () => void;
    ProjectName: string;
}

const Modal: React.FC<props> = React.memo(
    ({ color, onClose, zIndex, ProjectName, onClick }) => {
        const modalRef = React.useRef<HTMLDivElement>(null);

        const [project, setProject] = React.useState<IProject>();

        React.useEffect(() => {
            fetch(`http://localhost:5005/projects/${ProjectName}`)
                .then((response) => response.json())
                .then((data) => setProject(data));
        }, [ProjectName]);

        const [isClicked, setIsClicked] = React.useState(false);

        const [positionX, setPositionX] = React.useState<number>(0);

        const [modalX, setModalX] = React.useState<number>(0);

        const handleStartMoveModal = (
            e: React.MouseEvent<HTMLDivElement, MouseEvent>
        ) => {
            document.body.style.cursor = 'grabbing';

            if (!modalRef.current) return;
            const startX = e.pageX - modalRef.current.offsetLeft;
            setPositionX(startX);
            setIsClicked(true);
        };

        const handleFinishMoveModal = () => {
            document.body.style.cursor = 'default';

            setIsClicked(false);
        };

        const handleMoveModal = (
            e: React.MouseEvent<HTMLDivElement, MouseEvent>
        ) => {
            if (!isClicked) return;
            e.preventDefault();
            if (!modalRef.current) return;

            const x = e.pageX - modalRef.current.offsetLeft;
            const walkX = (x - positionX) * 1.5;

            setModalX((prev) => prev + walkX);
        };

        const handleCloseModal = () => {
            if (!modalRef.current) return;
            setTimeout(() => {
                onClose();
            }, 750);
            modalRef.current.classList.remove('animate-open');
            modalRef.current.classList.add('animate-close');
        };

        return (
            <div
                ref={modalRef}
                style={{
                    borderColor: color,
                    left: modalX,
                    zIndex: zIndex,
                }}
                onClick={onClick ? onClick : () => {}}
                onMouseDown={(e) => handleStartMoveModal(e)}
                onMouseUp={() => handleFinishMoveModal()}
                onMouseMove={(e) => handleMoveModal(e)}
                onMouseLeave={() => handleFinishMoveModal()}
                className="-bottom-5 h-[90vh] bg-black w-full md:w-2/3 lg:w-1/2 absolute rounded-lg border border-b-[20px] animate-open text-white text-center"
            >
                <p className="absolute text-sm whitespace-nowrap top-2 left-1/2 -translate-x-1/2">
                    это окно можно перемещать
                </p>
                <span
                    className="absolute rounded right-1 top-1 w-5 h-5 z-30 cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={handleCloseModal}
                >
                    <img src={Close} alt="" />
                </span>
                <div className="m-3 mt-7 p-2 h-full overflow-y-auto flex flex-col pb-8">
                    <p className="text-2xl border-b-2 mb-3 pb-3">
                        {project?.name}
                    </p>
                    <div>
                        {project?.information.map((item, i) => {
                            if (item.type === 'text')
                                return item.content ? (
                                    <p key={i} className="text-start">
                                        {item.content}
                                    </p>
                                ) : (
                                    <br key={i} />
                                );
                            if (item.type === 'img')
                                return (
                                    <img
                                        key={i}
                                        loading="lazy"
                                        src={item.content}
                                        className="flex object-contain w-full"
                                        alt=""
                                    />
                                );
                        })}
                    </div>
                </div>
            </div>
        );
    }
);

export default Modal;
