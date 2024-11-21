import React, { useState } from 'react'
import MemberList from './MemberList'

const AdminPanel = () => {
   const [isdisplay,setisDisplay] = useState('memberlist')
   
  return (
    <div className='flex pt-6'>
      <div className='w-1/6 bg-slate-800 h-screen flex pt-6 flex-col gap-4'>
         <button className={`text-white hover:bg-cyan-400/45  p-2 ${isdisplay =='memberlist'&& 'bg-cyan-900'}`} onClick={()=>{setisDisplay('memberlist')}}>Member list</button>
      </div>
      <div className='w-5/6 bg-neutral-100'>
        {isdisplay=='memberlist' && <MemberList/>}
      </div>
    </div>
  )
}

export default AdminPanel