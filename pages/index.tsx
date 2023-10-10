import { About } from "@/components/About";
import { ProgressBar } from "@/components/ProgressBar";
import { ContainerEducation } from "@/components/container-education";
import { ContainerMain } from "@/components/container-main";
import { ContainerMainText } from "@/components/container-main-text";
import Image from 'next/image';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsFiletypePhp, BsGit, BsFillDatabaseFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { FaPython } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { Skills } from "@/components/skills";
import { Button } from "@/components/button"; // Ensure this import path is correct
import { IconLink } from "@/components/icon-links";
import { PortafolioContainerMain } from "@/components/portafolio-containeer";

const Index = () => {
  return (
    <div className="h-full w-full flex bg-[#F0F0F6]">
      <aside className="bg-white p-4 flex flex-col w-[450px] gap-4 items-center" 
             style={{ position: 'sticky', left: '0', top: '0' }} >
        {/* ... Other components and code ... */}

        <span className="py-10 px-9 text-xl">
          I'm very grateful that you've taken the time to look at my CV.
        </span>
        <Button text="Click Me" type="buttonType" /> {/* Fixed this line */}
      </aside>

      <main className="flex flex-col items-center m-3 gap-4 bg-[#F0F0F6]">
        <div className="main-content-container" 
             style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>

          {/* ... Other sections ... */}

          <section className="p-4 w-[1300px] h-[467px] items-center flex bg-white m-6">
            <div className="flex flex-col items-center">
              <span className="px-9 py-8 font-bold text-7xl">I'm Daniela Monsalve</span>
              <div>
                <span className="px-9 text-[#FFB400] font-bold text-7xl">Back-end</span>
                <span className="py-8 font-bold text-7xl">Developer</span>
              </div>
              <span className="py-10 px-9 text-xl">
                I'm very grateful that you've taken the time to look at my CV.
              </span>
              <Button text="Click Me" type="buttonType" /> {/* This is where the code is fixed */}
            </div>
            <div className="mr flex justify-end">
              <Image className='' src='/image/woman bussiness.png' height={"290"} 
                     width={"280"} alt='Main image' />
            </div>
          </section>

          {/* ... Other sections ... */}

        </div>
        <footer className="py-4 text-center">
          <p>Este es el pie de página del contenido principal.</p>
        </footer>
      </main>

      <aside className="py-16 flex flex-col bg-white" 
             style={{ position: 'sticky', right: '0', top: '0' }}>
        <span className="flex justify-center font-bold text-2xl text-[#2B2B2B]">Links</span>
        <IconLink Icono={AiFillGithub} href="https://github.com/DanielaMGX" />
        <IconLink Icono={AiFillLinkedin} href="https://www.linkedin.com/in/ldaniela-monsalve" />
      </aside>
    </div>
  );
};

export default Index;
