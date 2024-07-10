import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import controlador from './main.jsx'

export default function CursoComp(props) {
    const [courseId, setCourseId] = useState('');
    const id = props.id;
    const title = props.title;
    const description = props.description;
    const price = props.price;
    const img = props.img;
    const rating = props.rating;
    const gray = props.gray;

    const grayBackground = { backgroundColor: "#D3E1FB" };
    const whiteBackground = { backgroundColor: "#E7EFFF" };

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
                    <img key={index} src="https://cdn.discordapp.com/attachments/1242519476633866313/1258066393094426674/full_star.png?ex=6686b121&is=66855fa1&hm=278bff2de93171d72af02514d03878cf78f39a7f3646b3f238b7c6bdfbfa7bde&" style={fullStar} />
                ))
            } else {
                comps.push((
                    <img key={index} src="https://cdn.discordapp.com/attachments/1242519476633866313/1258066413516754995/empty_star.png?ex=6686b126&is=66855fa6&hm=d26fb8174de8464eed14a4312ef3f47f7fd69801d0416fe01133c0e51dc21e17&" style={emptyStar} />
                ))
            }
            index++;
        }
        return comps;
    }
    const starComps = createComps();

    async function handleDeleteCourse () {
        const response = await controlador.remove(id);
        if (response) { 
            setCourseId(''); 
}
}

    return (
        <>
            <div className="curso" style={gray ? grayBackground : whiteBackground}>
                <img src={img} className="curso-img" />
                <div className="flex-column-start percent left-margin">
                    <Link className="top-margin" to={"/curso/" + id} >{title}</Link>
                    <p className="description">{description}</p>
                </div>
                <div className="absolute-end">
                    <div className="flex-row-center">
                        <div className="button-holder">
                            <img className="adjust-mid" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F0%2F859.png&f=1&nofb=1&ipt=506cb86dde23dcd450bc615eaca3db5e7b1a839e64a4a96589ac2d31bb46438f&ipo=images"/>
                            <button className="delete-button" onClick={handleDeleteCourse}></button>
                            <Link className="edit-button" to={`/update/${id}`}></Link>
                        </div>
                    </div>
                    <div className="flex-column-center">
                        <div className="price">
                            <p>${price}</p>
                        </div>
                        <div className="rating negative-margin">
                            {starComps}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}