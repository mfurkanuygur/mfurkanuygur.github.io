import { AboutText, EnterTitle, HomeSection, Subtitle, Title } from "./homeStyle";
import programming from "../../assets/marginalia-programming.gif";
const Home = () => {
    return (
        <HomeSection>
            <div className="container ">
                <div className="row  ">
                    <div className="col-lg-7 text-start ">
                        <EnterTitle >Hi. My name is</EnterTitle>
                        <Title>Furkan</Title>
                        <Subtitle>I am a Frontend Developer...💻</Subtitle>
                        <AboutText>
                            Hello. I am M. Furkan UYGUR. I am a graduate of the Computer
                            Engineering department at Erciyes University and I am still studying
                            at the same university for my master's degree. I started to be
                            interested in web design and programming field due to various
                            courses I took during my university education. I have acquired
                            advanced HTML and CSS knowledge required to be a Frontend Developer.
                            I reached intermediate-upper level in Javascript and ReactJs through
                            the bootcamp I participated in and I continue to improve myself.
                        </AboutText></div>
                    <div className="col-lg-5 ">
                        <img src={programming} alt="programming gif" className=" img-fluid " />
                    </div>
                </div>

                <div className="text-start px-5 mx-5">


                </div>
            </div>
        </HomeSection>
    );
};

export default Home;
