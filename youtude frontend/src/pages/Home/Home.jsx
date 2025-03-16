import React from 'react'
import SideNavBar from '../../components/sideNavbar/SideNavBar'
import HomePages from '../../components/HomePages/HomePages'

const Home = ({sidenavbar}) => {
  return (
    <div className='flex w-full pt-2 box-border'>
        <SideNavBar sidenavbar={sidenavbar}/>
        <HomePages  sidenavbar={sidenavbar}  />
    </div>
  )
}

export default Home