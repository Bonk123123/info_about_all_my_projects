import Container from '../../components/Container/Container';
import VkIcon from '../../assets/vk.svg';
import TgIcon from '../../assets/telegram.svg';
import GhIcon from '../../assets/github.svg';

const InformationPage = () => {
    return (
        <Container color="red" tailwindTransitionOnClose="translate-y-[100vh]">
            <div className="flex flex-col gap-10 m-3">
                <p className="text-3xl">Information</p>

                <div className="flex flex-col w-full h-full text-md md:text-xl gap-8 md:gap-16">
                    <p className="h-1/5">
                        Привет! Ты на странице где я храню некоторые свои
                        проекты
                    </p>
                    <p className="h-1/5">
                        Код от всех проектов находится у меня на гитхабе, ссылка
                        на него внизу
                    </p>
                    <p className="h-1/5">
                        Обо мне, я студент МАИ (Московский авиационный
                        институт), 20 лет, 3 курс, факультет прикладной
                        информатики
                    </p>
                    <p className="h-1/5">
                        в данный момент ищу работу на Web программиста
                        (frontend, backend, fullstack) или же что-то с С++
                    </p>
                    <div className="h-1/5 flex justify-center">
                        <div className="flex border-[red] border border-b-8 h-min p-3 rounded gap-10">
                            <a href="https://github.com/Bonk123123">
                                <img
                                    className="w-16 h-16"
                                    src={GhIcon}
                                    alt=""
                                />
                            </a>
                            <a href="https://web.telegram.org/k/#@HeavyBalls">
                                <img
                                    className="w-16 h-16"
                                    src={TgIcon}
                                    alt=""
                                />
                            </a>
                            <a href="https://vk.com/id288947804">
                                <img
                                    className="w-16 h-16"
                                    src={VkIcon}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default InformationPage;
