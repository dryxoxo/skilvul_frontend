import React from 'react'


function Layout({children}) {
  return (
    <div className="container-fluid vh-100">
        {children}
    </div>
  )
}


export default Layout
