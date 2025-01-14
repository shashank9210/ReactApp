export default function TabButton({children,isSelected, ...proxy_Props}){
    ///function handleClick(){
    ///    console.log("Button Clicked");
    ///}

    return (<li> 
        <button  className= {isSelected ? "active" : ''} {...proxy_Props}>{children}</button>
    </li>);
}