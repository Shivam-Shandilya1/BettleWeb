import React from "react";
import Card from "./Card"; 
import "./content.css";
import imgsrc from "./Images/img1.jpg";
function Content(){{
    const data = [
        {id:1,title:"Future Vision",iclass:"fa fa-eye fa-4x"},
        {id:2,title:"Innovative Ideas",iclass:"far fa-lightbulb fa-4x"},
        {id:3,title:"Blogs",iclass:"fas fa-comment-alt fa-4x"},
    ]
    const newarr = data.map((cvalue)=>
    {
        return(
            <Card 
            ctitle={`${cvalue.title}`}
            iclass={`${cvalue.iclass}`}
             />
            )
    });
    return(
        <>
        <div style ={{backgroundImage:`url(${imgsrc})`,}}>
        <div style={{marginBottom:100+"px"}}>
        <p className="heading">We're a digital <br/> agency.</p>
        <button type="button" class="btn btn-outline-danger" style={{color:"white",
            height: 59+"px",
            width: 196+"px",
            marginLeft: 15+"%",
            fontSize: 1.6+"rem"
          }}>Getting Started</button>
        </div>
   
    {newarr};
</div>
        </>
    )
}}

export default Content;