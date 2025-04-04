import APIMarketplace from "@/components/home/APIMarketplace";
import Banner from "@/components/home/Banner";
import ContactForm from "@/components/home/ContactForm";
import Curve from "@/components/home/Curve";
import EarlyAccess from "@/components/home/EarlyAccess";
import Enterprises from "@/components/home/Enterprises";
import ForDevelopers from "@/components/home/ForDevelopers";
import Interaction from "@/components/home/Interaction";
import ZERAH from "@/components/home/ZERAH";

const Home = () => {
  return (
    <div>
      <Banner />
      <ZERAH />
      <ForDevelopers />
      <Enterprises />
      <Interaction />
      <APIMarketplace />
      <Curve />
      <EarlyAccess />
      <ContactForm />
    </div>
  );
};

export default Home;
