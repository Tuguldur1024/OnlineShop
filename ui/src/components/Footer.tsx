"use client";
import Pinecone from "../../public/icons/pinecone";
import Phone from "../../public/icons/phone";
import Mail from "../../public/icons/mail";
import Facebook from "../../public/icons/facebook";
import Twitter from "../../public/icons/twitter";
import Linkedin from "../../public/icons/linkedin";
import Instagram from "../../public/icons/instagram";

const Footer = () => {
  return (
    <div className="w-full h-[282px] px-[200px] py-16 flex flex-col gap-[43px] bg-[#111111]">
      <div className="flex justify-between w-full">
        <Pinecone />
        <div className="flex gap-[38px]">
          <div className="flex gap-5 items-center justify-center">
            <div className="w-12 flex justify-center items-center h-12 rounded-full border border-white border-opacity-10">
              <Phone />
            </div>
            <p className="text-white flex items-center">(976) 7007-1234</p>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <div className="w-12 flex justify-center items-center h-12 rounded-full border border-white border-opacity-10">
              <Mail />
            </div>
            <p className="text-white flex items-center">contact@ecommerce.mn</p>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-opacity-10"></div>
      <div className="w-full flex justify-between">
        <p className="text-white">© 2024 Ecommerce MN</p>
        <div className="flex gap-[26px]">
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
