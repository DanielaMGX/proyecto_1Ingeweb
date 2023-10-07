
import { About } from "@/components/About"
import { ProgressBar } from "@/components/ProgressBar"
import { ContainerMain } from "@/components/container-main";
import Image from 'next/image';
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Index = () => {
  return (
    <div className="h-screen flex ">
      <aside className="flex flex-col w-[450px] gap-4 items-center" >
        <section className=" h-[300px] py-4 flex flex-col items-center text-xs">
          <div className=" h-[150px] w-[150px] mr">
            <Image className='rounded-full' src='/image/Imagen de WhatsApp 2023-10-06 a las 23.11.00_8cd37093.jpg' height={"150"} width={"150"} alt='Profile Image' />
          </div>
          <span className="font-bold ">Daniela Monsalve</span>
          <span>Python Backend Developer</span>
        </section>
        <div className="flex flex-col w-[220px]">
          <About Title="Age:" Description="25" />
          <About Title="Residence:" Description="COL" />
          <About Title="Dev" Description="backend" />
          <About Title="Addres:" Description="Colombia, Bello" />
        </div>
        <section className=" h-[153px] w-[220px]">
          <span className="font-semibold w-[220px] h-[1.5px]"> Languages </span>
          <ProgressBar Title="English" Percentage="100" />
          <ProgressBar Title="Spanish" Percentage="100" />
        </section>
        <section className=" h-[400px] w-[220px]">
          <span className="font-semibold w-[220px] h-[1.5px]"> Programing Languages </span>
          <ProgressBar Title="Golang" Percentage="100%" />
          <ProgressBar Title="Python" Percentage="100%" />
          <ProgressBar Title="Java" Percentage="90%" />
          <ProgressBar Title="Javascript" Percentage="85%" />
          <ProgressBar Title="CSS" Percentage="95%" />
          <ProgressBar Title="HTML" Percentage="80%" />
          <ProgressBar Title="PHP" Percentage="90%" />
        </section>
        <section className="debug h-[140px]"></section>
      </aside>
      <main className="debug flex flex-col w-full m-3 gap-4" >
        <section className="p-4 debug w-[970px] h-[467px]"></section>
        <section className="debug  w-[970px] h-[815px]">
          <ContainerMain Title="Web development" Description="web" Icono={HiOutlineDesktopComputer} />
        </section>
        <section className="debug w-[970px] h-[648px]"></section>
      </main>
    </div>
  )
}

export default Index