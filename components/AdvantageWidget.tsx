import Image from "next/image";

const AdvantageWidget = (props: {imageSource: string, heading:string, description:string, 'data-aos'?:string}) => {
    return <div className="bg-[#000] p-4 rounded flex flex-col gap-4 items-center shadow-black shadow-lg w-64" data-aos={props['data-aos']}>
        <div className="w-32 aspect-[1/1] relative">
            <Image src={props.imageSource} alt="programming experience" layout="fill"/>
        </div>
        <h2 className="text-xl">{ props.heading }</h2>
        <p className="text-grey text-center">{ props.description }</p>
    </div>;
}

export default AdvantageWidget;