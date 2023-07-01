import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }
function ProjectCard  (props)  {
  console.log(props.name)
  // let imgArr = props.imgArr
  // console.log(imgArr)
  
  const listImgs = props.imgArr?.map((img) =>
  <>
  <img src={require('../assets/img/'+img)}  className="project-img "/>
  <h5 style={{textAlign:'center'}}> { img.split(".")[0]}</h5>
  </>
  );

  return (
    <>
    <Col size={8} sm={6} md={7}>
      <div >
        <p>
          {props.projectInfo}
        </p>
        <p><a href={props.projlink} target="_blank" className="anchorProj">Project Link <ArrowRightCircle size={25}/> </a>
        </p>
      </div>
    </Col>
    <Col size={4} sm={5} md={4}>
    
    <ul >{listImgs}</ul>
    
    </Col>
    </>
  )
}
export default ProjectCard;
