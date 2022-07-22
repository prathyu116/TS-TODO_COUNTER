interface HeaderProps {
    label: string;
    children?:JSX.Element | JSX.Element[];//kore child undenkil
}


const Herder = ({ label,children }: HeaderProps) => {
    return (
       <>
            <h1 >{label}</h1>
            {children}
       </>
    )
}

export default Herder