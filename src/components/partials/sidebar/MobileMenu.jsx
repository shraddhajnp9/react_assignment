import React, { useRef, useEffect, useState } from 'react'

import Navmenu from './Navmenu'
import { menuItems } from '@/constant/data'
import SimpleBar from 'simplebar-react'
import useSemiDark from '@/hooks/useSemiDark'
import useSkin from '@/hooks/useSkin'
import useDarkMode from '@/hooks/useDarkMode'
import { Link } from 'react-router-dom'
import useMobileMenu from '@/hooks/useMobileMenu'
import Icon from '@/components/ui/Icon'

import themeConfig from '@/configs/themeConfig'


const MobileMenu = ({ className = 'custom-class' }) => {
  const scrollableNodeRef = useRef()
  const [scroll, setScroll] = useState(false)

  const config = JSON.parse(localStorage.getItem('config'))

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableNodeRef.current.scrollTop > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    scrollableNodeRef.current.addEventListener('scroll', handleScroll)
  }, [scrollableNodeRef])

  const [isSemiDark] = useSemiDark()
  // skin
  const [skin] = useSkin()
  const [isDark] = useDarkMode()
  const [mobileMenu, setMobileMenu] = useMobileMenu()
  return (
    <div
      className={`${className} fixed  top-0 bg-white dark:bg-slate-800 shadow-lg  h-full   w-[248px]`}
    >
      <div className='logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] h-[72px]  px-3'>
        <Link to='/dashboard'>
          <div className='flex items-center space-x-4'>
            {config && (
              <div className='logo-icon'>
                {!isDark && !isSemiDark ? (
                  <img
                    src={config.logo}
                    alt='..'
                    className='w-12'
                  />
                ) : (
                  <img
                    src={config.logo}
                    alt='..'
                    className='w-12'
                  />
                )}
              </div>
            )}
            <div>
              <h1 className='text-base xl:text-xl font-semibold text-slate-900 dark:text-slate-100'>
                {config?.sidebar_top.name || themeConfig.app.name}
              </h1>
            </div>
          </div>
        </Link>
        <button
          type='button'
          onClick={() => setMobileMenu(!mobileMenu)}
          className='cursor-pointer text-slate-900 dark:text-white text-2xl'
        >
          <Icon icon='heroicons:x-mark' />
        </button>
      </div>

      <div
        className={`h-[60px]  absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
          scroll ? ' opacity-100' : ' opacity-0'
        }`}
      ></div>
      <SimpleBar
        className='sidebar-menu h-[calc(100%-80px)]'
        scrollableNodeProps={{ ref: scrollableNodeRef }}
      >
        <Navmenu
          menus={menuItems}
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </SimpleBar>
    </div>
  )
}

export default MobileMenu
