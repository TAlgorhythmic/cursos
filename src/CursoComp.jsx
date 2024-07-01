import { Link } from "react-router-dom";

export default function CursoComp(props) {
    const id = props.id;
    const title = props.title;
    const description = props.description;
    const price = props.price;
    const img = props.img;
    const rating = props.rating;
    const gray = props.gray;

    const grayBackground = { backgroundColor: "gainsboro" };
    const whiteBackground = { backgroundColor: "white" };

    const fullStar = {
        width: '20px',
        height: '20px',
        pointerEvents: "none"
    }
    const emptyStar = {
        width: '20px',
        height: '20px',
        pointerEvents: "none"
    }
    function createComps() {
        const comps = [];
        let ratingTemp = parseInt(rating);
        let index = 1;
        for (ratingTemp; index <= 5; ratingTemp--) {
            if (ratingTemp > 0) {
                comps.push((
                    <img key={index} src="https://cdn.discordapp.com/attachments/1242519476633866313/1257352407159931051/full_star.png?ex=6684182e&is=6682c6ae&hm=2fa26ea2a3e02ccda8ef7ba94bfa1cfee61759c6f2ad13739ed2be60f3cf7bd4&" style={fullStar} />
                ))
            } else {
                comps.push((
                    <img key={index} src="https://cdn.discordapp.com/attachments/1242519476633866313/1257352406828585051/empty_star.png?ex=6684182e&is=6682c6ae&hm=65876e643a21cf876ea4d9067bf8e33903f78a72c59b3937805e167a40bfbb3f&" style={emptyStar} />
                ))
            }
            index++;
        }
        console.log(comps);
        return comps;
    }
    const starComps = createComps();

    return (
        <>
            <div className="curso" style={gray ? grayBackground : whiteBackground}>
                <img src={img} className="curso-img" />
                <div className="flex-column-start percent left-margin">
                    <Link className="top-margin" to={"/curso/" + id} >{title}</Link>
                    <p className="description">{description}</p>
                </div>
                <div className="absolute-end">
                    <div className="rating">
                        {starComps}
                    </div>
                    <div className="price">${price}</div>
                </div>
            </div>
        </>
    )
}