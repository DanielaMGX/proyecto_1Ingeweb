
interface Aboutprops {
    Title: String;
    Description: String;
}

const About = ({Title, Description}: Aboutprops) => {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <span className="font-medium"> {Title} </span>
                <span> {Description} </span>
            </div>
        </div>
    )
}

export {About}