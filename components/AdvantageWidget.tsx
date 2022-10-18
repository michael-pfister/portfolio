import Image from "next/image";

const AdvantageWidget = ({imageSource, heading, description}: {imageSource: string, heading:string, description:string}) => {
    return <div className="bg-[#000] p-4 rounded flex flex-col gap-4 items-center shadow-lg w-64">
        <div className="w-32 aspect-[1/1] relative">
            <Image src={imageSource} alt="programming experience" layout="fill"/>
        </div>
        <h2 className="text-xl">{ heading }</h2>
        <p className="text-grey text-center">{ description }</p>
    </div>;
}

export default AdvantageWidget;