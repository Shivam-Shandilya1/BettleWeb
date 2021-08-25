import React from "react";

function Card (props)
{
    return(
        <>
        <div style={{
        display: "inline-block",
        backgroundColor:"#dc3545",
        height:250+"px",
        width:25+"%",
        marginLeft:5+"%",
        marginTop:40+"px",
        marginBottom:40+"px",
        marginRight:20+"px",
        borderRadius:40+"px",
        }}>
        <center>
           <i class={props.iclass} style={{color:"white",marginTop:20+"px"}}></i><br/>
           <p style={{color:"white",
           fontSize:3+"rem",
           marginTop:40+"px",
           }}>{props.ctitle}</p>
        </center>
        </div>
        </>
    )
}
export default Card;