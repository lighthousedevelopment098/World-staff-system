import React from 'react';
import { ProfileData } from '../../utils/data';
import TeamCard from './TeamCard';


const OurTeam = () => {
  return (
    <div className="lg:w-[80%] mx-auto my-10">
      <div className="grid lg:grid-cols-3 justify-center md:grid-cols-1">
        {ProfileData.map((val, index) => (
          <TeamCard
            key={index}
            img={val.img}
            title={val.title}
            phone={val.phone}
            phone1={val.phone1}
            call1={val.call1}
            email={val.email}
            name={val.name}
            FLink={val.FLink}
            TLink={val.TLink}
            LLink={val.LLink}
            ILink={val.ILink}
            description={val.description}
            cnic={val.cnic}
          />
        ))}
      </div>
      
    </div>
  );
};

export default OurTeam;
