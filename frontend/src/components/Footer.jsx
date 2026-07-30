import { usePortfolio } from '../context/PortfolioContext'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  const { data, isLoading } = usePortfolio()

  if (isLoading) {
    return null
  }
  
  return (
    <footer className='py-stack-lg px-margin-mobile md:px-margin0desktop border-t border-outline-variant'>
      <div className='flex flex-col items-center gap-stack-sm text-center'>
        
        <div className='flex gap-6'>
          <a className='text-outline hover:text-primary transition-colors' href="https://x.com/NateAlleyne1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter size={80} />
          </a>
          <a className='text-outline hover:text-primary transition-colors' href="https://github.com/ncgalleyne" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={80} />
          </a>
          <a className='text-outline hover:text-primary transition-colors' href="https://www.linkedin.com/in/nathaniel-alleyne-361598170/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={80} />
          </a>
        </div>
        <p className='text-outline text-sm'>
          &copy; {new Date().getFullYear()} {data?.name || 'Nathaniel Alleyne'}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}