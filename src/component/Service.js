import React from 'react'
import SingleService from './SingleService'
import { serviceData } from '../data'
import "./service.css"
const Service = () => {
  return (
    <section className="container serviceContainer" id='service'>
      <div className="singleServiceWrapper">
        {serviceData.map(
          ({ id, name, description, item1, item2, item3, image,aosData }) => {
            return (
              <SingleService
                key={id}
                name={name}
                description={description}
                image={image}
                item1={item1}
                item2={item2}
                item3={item3}
                aosData={aosData}
              />
            );
          }
        )}
      </div>
     
     
    </section>
  );
}

export default Service