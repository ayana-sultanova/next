import {Planet} from "@/types/types";

interface IProps {
    data: Planet[]
}

const SliderBlock = ({ data }: IProps) => {

    return (
        <>
            {data.map((image) => (
                <div className="block" key={image.title}>
                    <img className="image-block" src={image.src} alt={image.description} />
                    <h1>{image.title}</h1>
                    <p>{image.description}</p>
                </div>
            ))}
        </>
    );
};

export default SliderBlock;