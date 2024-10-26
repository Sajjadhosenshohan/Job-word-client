import { Fade } from "react-awesome-reveal"

const Title = ({title, description}) => {
    return (
        <div className="text-center mb-6 md:mb-8 lg:mb-12 mx-auto w-full md:w-2/4">
            <Fade direction="left">
                <h2 className="font-bold text-xl md:text-2xl lg:text-4xl mb-3 text-primary">{title}</h2>
                <p>{description}</p>
            </Fade>
        </div>
    )
}

export default Title
