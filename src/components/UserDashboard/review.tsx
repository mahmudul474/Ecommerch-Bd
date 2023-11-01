import React from 'react'
import Reviewcard from './reviewcard'

export default function ReviewComponent() {
  return (
    <div className="bg-gray-100 p-5 mx-5  rounded ">
      <div>
        <h2 className="text-lg font-semibold mb-9 capitalize">Riviews</h2>
      </div>
   
   <div>
    <Reviewcard></Reviewcard>
   </div>

    </div>
  )
}
