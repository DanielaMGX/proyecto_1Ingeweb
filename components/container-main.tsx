import { IconType } from "react-icons";
import { HiOutlineDesktopComputer } from 'react-icons/hi';

interface ContainerProps {
    Title: String;
    Description: String;
    Icono: IconType;
}

const ContainerMain = ({ Title, Description, Icono }: ContainerProps) => {
    return (
        <div className="debug">
            <span>
                <Icono />
            </span>
            <span>{Title}</span>
            <span>{Description}</span>
        </div>

    );
};

export { ContainerMain }