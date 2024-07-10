export default function CarouselDiv(props) {
    const img = props.img;
    const title = props.title;
    const description = props.description;
    return (
        <div className="full-content">
            <img src={img} className="full-content"/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}