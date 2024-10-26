import { Fade } from "react-awesome-reveal"

const Title = () => {
    return (
        <div className="text-center mb-6 md:mb-8 lg:mb-12 mx-auto w-full md:w-2/4">
            <Fade direction="left">
                <h2 className="font-bold text-xl md:text-2xl lg:text-4xl mb-3 text-primary">FAQ</h2>
                <p> We're here to help! Whether you're curious about our services, need assistance navigating our platform,</p>
            </Fade>
        </div>
    )
}

export default Title
