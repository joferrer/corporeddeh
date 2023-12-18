import { useEffect, useState } from "react"

export const useWindowSize = () => { 
    const [windowSize,setwindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      })
    
      useEffect(() => {
        const handleResize = () => { 
          const { innerWidth,innerHeight } = window
          setwindowSize({
            width: innerWidth,
            height: innerHeight
          })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
    
        return ()=>window.removeEventListener('resize',handleResize)
      }, [])
    
    return {windowSize}
}