import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title=`You clicked ${count} times`
      })
}

export default useDocumentTitle