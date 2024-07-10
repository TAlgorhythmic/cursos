export default function CarouselDiv(props) {
    const img = props.img;
    const title = props.title;
    const description = props.description;
    return (
        <div className="full-content">
            <img src={img} className="full-content-image" />
            <div className="flex-column-center2">
                <h2>{title}</h2>
                <p className="margin">{description}</p>
            </div>
        </div>
    )
}