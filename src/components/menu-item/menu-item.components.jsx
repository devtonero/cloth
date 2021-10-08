
import './menu-item.styles.scss';

import { withRouter } from 'react-router';

const MenuItem = ({title, imageUrl, size, linkUrl, history }) => (
    <div 
    className={`${size} menu-item`} onClick={()=> history.push(linkUrl)}
    >
        <div className='background-image' style={{ 
        backgroundImage: `url(${imageUrl})`
        }} />
         <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW </span>
         </div>  
    </div>
)
export default withRouter(MenuItem);