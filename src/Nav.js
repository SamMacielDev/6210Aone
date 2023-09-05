import {Link} from 'react-router-dom';

function Nav({data})
{
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"HOME"}>SCP_Home</Link>
                </li>
                {
                data.map(
                    scp => (
                        <li key={scp.model}>
                            <Link to={`${scp.model}`}>{scp.model}</Link>
                        </li>
                    )
                )
            }        
            </ul>
        </nav>
    );
}

export default Nav;