import './scp.css';
import './nav.css';

function Scp({scp})
{
    return(
        <div className="component container">            
            <h1>{scp.model} </h1>
            <img src={scp.image} alt={scp.subject}/>
            <h2>Class: {scp.object_class}</h2>
            <p><b>Especial Containment Procedure: </b>{scp.special_containment_procedures}</p>
            <p><b>Description: </b>{scp.description}</p>
            <p><button>For the official image, click here.</button></p>
        </div>
    );
}

export default Scp;