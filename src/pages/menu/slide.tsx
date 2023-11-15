import Typography from '@mui/material/Typography';
import React, {useState} from "react";
import {useRouter} from "next/router";

interface IProps {
  slideId: number;
  slideNome: String;
  musicoNome: String;
}

const ListSlide: React.FC<IProps> = ({ slideId, slideNome}) => {
    const router = useRouter();
    const showSlide = () => {
        router.push({
          pathname: "/cifra",
          query: {
              cifraId: slideId + 1
          },
        });
    };

  return (
        //onClick={()=>{showSlide()}}
      <div style={{paddingTop: "20px"}}>
          <Typography style={{fontSize:"large"}}><b>{slideId + 1}</b> - <button onClick={showSlide}>{slideNome}</button></Typography>
      </div>
  );
};

export default ListSlide;
