import { RiFacebookLine, RiGithubFill, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className='fixed w-full bg-white shadow-md rounded-b-sm p-2 pr-10 pl-10 '>
        <nav className='flex items-center justify-between'>
            <div className='text-xl'>
            <span>Carlos Alberto Calixto </span>
            </div>
            <aside>
                <ul className='flex items-center justify-center gap-8 font-semibold text-gray-800'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>Hobbies</li>
                    <li>CV</li>
                </ul>
            </aside>
            <div>
                <ul className='flex items-center justify-center gap-4'>
                    <li><RiFacebookLine/></li>
                    <li><RiTwitterLine/></li>
                    <li><RiInstagramLine/></li>
                    <li><RiLinkedinLine/></li>
                    <li><RiGithubLine/></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar