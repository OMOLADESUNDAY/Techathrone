import React from 'react'
import { TiTick } from 'react-icons/ti';
import "./singleService.css"
const SingleService = ({name,image, description, item1,item2,item3,aosData}) => {
  return (
    <article className="singleServiceContainer" data-aos={aosData}>
      <div className="singleServiceImgContainer">
        <img className="singleServiceImg" src={image} alt={name} />
      </div>
      <div className="singleServiceContentContainer">
        <h2>{name}</h2>
        <p>{description}</p>
        <ul className='ticklist'>
          <li>
            <TiTick className="tick" /> {item1}
          </li>
          <li>
            <TiTick className="tick" />
            {item2}
          </li>
          <li>
            <TiTick className="tick" />
            {item3}
          </li>
        </ul>
      </div>
    </article>
  );
}

export default SingleService