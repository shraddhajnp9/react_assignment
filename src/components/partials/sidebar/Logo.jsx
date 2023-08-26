import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import useDarkMode from '@/hooks/useDarkMode'
import useSidebar from '@/hooks/useSidebar'
import useSemiDark from '@/hooks/useSemiDark'
import useSkin from '@/hooks/useSkin'
import themeConfig from '@/configs/themeConfig'

const SidebarLogo = ({ menuHover }) => {
  const [isDark] = useDarkMode()
  const [collapsed, setMenuCollapsed] = useSidebar()
  // semi dark
  const [isSemiDark] = useSemiDark()
  // skin
  const [skin] = useSkin()

  return (
    <div
      className={` logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] pt-3 pb-6 pl-2.5 pr-4 
      ${menuHover ? 'logo-hovered' : ''}
      ${
        skin === 'bordered'
          ? ' border-b border-r-0 border-slate-200 dark:border-slate-700'
          : ' border-none'
      }
      
      `}
    >
      <Link to='/dashboard'>
        <div className='flex items-center space-x-4'>
            <div className='logo-icon'>
              {!isDark && !isSemiDark ? (
                <img src='https://marvicautomation.com/myImages/logo.png' alt='..' className='w-12' />
              ) : (
                <img src='https://marvicautomation.com/myImages/logo.png' alt='..' className='w-12' />
              )}
            </div>

          {(!collapsed || menuHover) && (
            <div>
              <h1 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>
                eBug
              </h1>
            </div>
          )}
        </div>
      </Link>

      {(!collapsed || menuHover) && (
        <div
          onClick={() => setMenuCollapsed(!collapsed)}
          className={`text-xl border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150 cursor-pointer`}
        >
          <Icon icon='heroicons-outline:bars-3-bottom-right' width={24} />
        </div>
      )}
    </div>
  )
}

export default SidebarLogo
