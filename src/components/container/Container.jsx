import React from 'react'

function Container({children}) {
  return (
	 <div style={{
		width:"90%",
		margin : "0 auto"
	 }}>{children}</div>
  )
}

export default Container