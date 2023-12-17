import { useRouter } from 'next/router'
import React from 'react'

export default function Verify() {
 const router=useRouter()

        console.log(router.query)



  return (
    <div>verify</div>
  )
}
