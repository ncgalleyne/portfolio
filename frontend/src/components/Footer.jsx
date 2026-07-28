import { usePortfolio } from '../context/PortfolioContext'

export default function Footer() {
  const { data, isLoading } = usePortfolio()

  if (isLoading) {
    return null
  }
  
  return (
    <footer className='py-stack-lg px-margin-mobile md:px-margin0desktop border-t border-outline-variant'>
      <div className='flex flex-col items-center gap-stack-sm text-center'>
        <p className='text-outline text-sm'>
          &copy; {new Date().getFullYear()} {data?.name || 'Your Name'}. All rights reserved.
        </p>
        <div className='flex gap-6'>
          <a className='text-outline hover:text-primary transition-colors' href="#">Twitter</a>
          <a className='text-outline hover:text-primary transition-colors' href="#">GitHub</a>
          <a className='text-outline hover:text-primary transition-colors' href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}