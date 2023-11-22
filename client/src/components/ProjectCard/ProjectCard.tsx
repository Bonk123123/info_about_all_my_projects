import React from 'react';
import noImage from '../../assets/no-image.svg';
import { InView } from 'react-intersection-observer';

interface props {
    name: string;
    description: string;
    img: string;
    imgGif?: string;
    stack: string[];
    onClick: () => void;
}

const ProjectCard: React.FC<props> = React.memo(
    ({ name, description, img, imgGif, stack, onClick }) => {
        const [imgHover, setImgHover] = React.useState(false);

        const [isVisible, setIsVisible] = React.useState(false);

        const handleIntersection = (entries: boolean) => {
            setIsVisible(entries);
        };

        return (
            <InView onChange={(e) => handleIntersection(e)}>
                <div
                    onClick={onClick}
                    onMouseEnter={() => img && setImgHover(true)}
                    onMouseLeave={() => img && setImgHover(false)}
                    className=" w-full xl:w-[400px] h-[550px] xl:h-full hover:bg-black flex flex-col rounded-lg overflow-hidden border border-b-8 border-[blue] cursor-pointer outline-[blue] duration-75 hover:outline hover:outline-2"
                >
                    <span className="w-full h-[40%] flex justify-center items-start overflow-hidden z-20 border-b-2 border-[blue]">
                        {img && isVisible ? (
                            imgHover && imgGif ? (
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src={imgGif}
                                    alt=""
                                    className="flex object-contain w-full h-full"
                                />
                            ) : (
                                <img
                                    loading="lazy"
                                    src={img}
                                    alt=""
                                    className="flex object-cover w-full h-full"
                                />
                            )
                        ) : (
                            <img
                                loading="lazy"
                                src={noImage}
                                alt=""
                                className="flex object-contain h-full w-full"
                            />
                        )}
                    </span>
                    <div className="h-[60%] w-full flex flex-col justify-center">
                        <p className="text-2xl mb-10">{name}</p>
                        <p className="text-start m-3 text-sm">{description}</p>
                        <p className="text-start m-3 text-sm mb-10">
                            stack: {stack.map((item) => item + ' ')}
                        </p>
                    </div>
                </div>
            </InView>
        );
    }
);

export default ProjectCard;
