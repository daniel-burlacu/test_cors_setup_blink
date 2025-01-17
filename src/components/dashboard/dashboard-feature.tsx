'use client'
import logo from '../../../public/SAFLogo.png'
 
const links: { label: string; href: string }[] = [
  { label: 'Project github', href: 'https://github.com/daniel-burlacu/solana_ark_foundation'},
]

export default function DashboardFeature() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        {/* Centered Image */}
        <img
          className="block mx-auto"
          alt="Logo"
          src={logo.src}
        />
        {/* Move links lower */}
        <div className="space-y-2 mt-4">
          {links.map((link, index) => (
            <div key={index}>
              <a
                href={link.href}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
