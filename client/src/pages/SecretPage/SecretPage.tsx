import Container from '../../components/Container/Container';

const SecretPage = () => {
    return (
        <Container
            color="green"
            tailwindTransitionOnClose="translate-x-[100vw]"
        >
            <div className="w-full h-full flex justify-center items-center">
                <img
                    src="https://media.tenor.com/wUv4TBeeuZoAAAAd/cat-huh.gif"
                    alt=""
                />
            </div>
        </Container>
    );
};

export default SecretPage;
