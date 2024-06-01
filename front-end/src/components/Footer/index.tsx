
function Footer(){
    const currentYear: number = new Date().getFullYear();

    return(
        <footer className='p-4 text-center bg-black text-white border-top border-dark'>
            <span className={`fs-6 m-0`}>Copyright &copy; <time>{currentYear}</time> Gabriel Marreiros - Todos os direitos reservados.</span>
        </footer>
    )
}

export default Footer;