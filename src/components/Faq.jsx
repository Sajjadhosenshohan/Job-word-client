import { Fade } from "react-awesome-reveal";

const Faq = () => {
    return (
        <div className="mt-24">

            <div className="text-center mb-12 mx-auto w-2/3 md:w-full">
                <Fade direction="left">
                    <h2 className="font-bold text-4xl mb-3">Our Outstanding Features</h2>
                    <p>Experience unparalleled service and unforgettable adventures with our exceptional features.</p>
                </Fade>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;