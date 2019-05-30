import React from 'react';
import ImageToggleOnMouseOver from "../HookComponents/ImageToggleOnMouseOver";
// import ReactDOM from 'react-dom';

const PresentationCard = () => {
    const initialPresentationCardsList = [
        {
            id: 1,
            name:"Cat",
            primaryImg: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            secondaryImg: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            id: 2,
            name:"Dog",
            primaryImg: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            secondaryImg: "https://images.pexels.com/photos/2351322/pexels-photo-2351322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
    ];

    console.log('Creating Presentation Cards');
    return (
        <div className="container">
            <div className="row">
                <ul className="list-group">
                    {initialPresentationCardsList.map( (presentationCard) => (
                        <li className="list-group-item" key={presentationCard.id}>
                            <div className="row">
                                <ImageToggleOnMouseOver
                                    primaryImg= {presentationCard.primaryImg}
                                    secondaryImg={presentationCard.secondaryImg}
                                    height={75}
                                    width={150}
                                    alt=""
                                />
                            </div>
                            <div className="row">
                                <label>{presentationCard.name}</label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>);

}

export default PresentationCard;