
export default function Card({title,imgSrc,body}){
  
    return(
 
  <div>
<h3>{title}</h3>
<img src={imgSrc} alt={title}/>
<p>{body}</p>


 </div>

    )

}

