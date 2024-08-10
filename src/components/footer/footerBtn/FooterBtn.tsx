import "../style.css"
type footerBtnType = {
    content:string;
    image:string;
    check?:boolean;
    url:string
}

export const FooterBtn = ({content,image,check = true,url}:footerBtnType) => {
    
    const handleClick= (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
      };

return (
    check ? (
        <div className="btn-container border-2 border-[#1C1B1A] hover:border-[#ffef22] transition-all poppins-bold text-white poppins-regular text-sm font-extrabold ">
            <img src={`/${image}`} alt={`${image}`}  />
            <button onClick={handleClick}>{content}</button>
        </div>
    ) : (
        <div className="btn-container border-2 border-[#1C1B1A] hover:border-[#ffef22] poppins-bold text-white poppins-regular text-sm font-extrabold ">
            <button onClick={handleClick}>{content}</button>
            <img src={`/${image}`} alt={`${image}`}  />
        </div>
    )
)
}


