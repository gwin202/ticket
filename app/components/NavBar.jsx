import Image from 'next/image'
import Logo from './jiggy-logo.png'
import Link from 'next/link'

export default function NavBar(){
    return(
        <nav>
           
            <Image
                src ={Logo}
                alt = 'logo'
                width ={70}
                quality ={100}
                placeholder = 'blur'
                
            />
            <h1>Jiggy Ticket</h1>
            <Link href='/'>Dashboard</Link>
            <Link href='/tickets'>Tickets</Link>
        </nav>
    )
}