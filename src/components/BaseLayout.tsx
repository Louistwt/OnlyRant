import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import Sidebar from './Sidebar'

const BaseLayout = async ({ children, renderRightPanel = true }:{children: ReactNode, renderRightPanel?: boolean}) => {
  // auth required to view
  const {isAuthenticated} = getKindeServerSession()

  if(!(await isAuthenticated())) {
    return redirect("/")
  }
  return (
    <div className='flex max-w-2xl lg:max-w-7xl mx-auto relative'>
      <Sidebar/>
      <div className='w-full lg:w-3/5 flex flex-col border-r'>{children}</div>
      {renderRightPanel && "Suggested Products"}
    </div>
  )
}

export default BaseLayout