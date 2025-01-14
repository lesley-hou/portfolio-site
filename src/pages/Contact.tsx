import React from "react";
import Layout from "../components/layout/Layout";
// import ContactForm from "../components/contact/ContactForm";

const Contact: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
                <div className="text-inter">
                    <p className="font-semibold text-porcelain text-xl">contact me</p>
                    <p className="text-boulder">let's work on something cool together.</p>
                    <p className="text-boulder underline font-bold mt-6">lesleyhou28@gmail.com</p>
                </div>
                {/* <ContactForm /> */}
            </div>
        </Layout>
    );
};

export default Contact;