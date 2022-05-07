import React, { useEffect} from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import {setUniversity} from '../../redux/actions/universityActions'
import UniversityComponent from "./UniversityComponent";


const UniversityListing = () =>{
  const dispatch = useDispatch();
  
  const getUniversities = async () => {
    const response = await axios.get("http://universities.hipolabs.com/search?country=United+States")
    .catch((err)=>{
      console.log("Err",err);
    });
    dispatch(setUniversity(response.data))
  }
  
  useEffect(()=>{
    getUniversities()  
  },[]);


return(
  <div className="ui grid container">
   <UniversityComponent />
  </div>
)
}

export default  UniversityListing;