import Link from "next/link"

const Footer = () => {
  return (
    <div className="absolute bottom-0 text-center w-full text-xs text-gray-500 border-t border-gray-500 py-3">tipid. © 2024. Made by <Link className="underline" href={'https://kdot-portfolio.vercel.app/'}>Kenneth Docot</Link>.</div>
  )
}

export default Footer