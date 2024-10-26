import Title from "./Title";

const Faq = () => {
    return (
        <div className="section-to-section-margin container mx-auto">

            <Title title={'FAQ'} description={`We're here to help! Whether you're curious about our services, need assistance navigating our platform`} />

            <div className="collapse collapse-plus bg-secondary">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title text-xl font-medium text-primary">
                    What is the role being offered?
                </div>
                <div className="collapse-content text-slate-700">
                    <p>The role being offered is for a talented junior MERN stack developer to join our team in Japan. As a junior member, you'll have the opportunity to work closely with our experienced developers on exciting projects utilizing MongoDB, Express.js, React, and Node.js.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-secondary">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-primary">
                    What growth opportunities does this role offer?
                </div>
                <div className="collapse-content text-slate-700">
                    <p>This role offers an excellent chance for growth, where you'll be able to enhance your skills while contributing to the development of innovative web applications.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-secondary">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-primary">
                    What type of candidate are you looking for?
                </div>
                <div className="collapse-content text-slate-700">
                    <p>We're seeking someone with a solid foundation in web development and a passion for learning new technologies. If you're enthusiastic about building dynamic and user-friendly applications and eager to kick-start your career in the MERN stack environment, we'd love to hear from you.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-secondary" >
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-primary">
                    How can I apply for this role?
                </div>
                <div className="collapse-content text-slate-700">
                    <p>We invite you to complete this job assessment to prove your skill. Please visit [website link] to start your assessment.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-secondary">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-primary" >
                    What benefits are offered with this position?
                </div>
                <div className="collapse-content text-slate-700">
                    <p>As a member of our team, you'll receive competitive compensation, opportunities for professional development, and a supportive work environment that fosters growth and creativity.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-secondary">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-primary" >
                    Is remote work available for this position?
                </div>
                <div className="collapse-content text-slate-700">
                    <p>Currently, this position requires onsite work in Japan. However, we may consider remote work arrangements in the future.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;