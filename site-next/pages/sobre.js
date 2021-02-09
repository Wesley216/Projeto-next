import Link from 'next/Link';

function Title(props){
    return(
        <h1 style={{color: props.color}}>{props.children}</h1>
    )
}

export default function Sobre(){

    return(
        <div>
            <header>
                <Title color="red">Sobre</Title>
                <img src="..." />
            </header>

            <Link href="/">
            <a>
                Link para a home
            </a>
            </Link>

        </div>
    )
}