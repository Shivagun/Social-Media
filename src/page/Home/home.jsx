import React from 'react'
import"./home.css"
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/sidebar/side'
import Feed from '../../components/feed/feed'
import Right from '../../components/rightbar/Right'
export default function Home() {
  return (
    <>
<Topbar/>
<div className='homeContainer'>
<Sidebar/>
<Feed/>
<Right/>

</div>
</>
    )
}
