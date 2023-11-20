const rootLink = 'src/assets/images';
const Image = ({src,width,height,ml, onClick}) =>(
    src === "LineTable" ?
    <div style={{marginLeft:ml}} onClick={onClick}>
    <img src= {`src/assets/images/LineTable.png`} alt="PG Image" width={width} height={height} />
    </div> 
    :
    <div style={{marginLeft:ml}} onClick={onClick}>
    <img src= {rootLink + src } alt="PNG Image" width={width} height={height} />
    </div>
);

export {Image}