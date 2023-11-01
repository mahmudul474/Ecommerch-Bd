import React from 'react'
import OrderCard from './orderCard'

export default function OrderComponent() {
  return (
    <div className="bg-gray-100 p-5 mx-5  rounded ">
      <div>
        <h2 className="text-lg font-semibold mb-9 capitalize">orders</h2>
      </div>
  <OrderCard></OrderCard>

    </div>
  )
}
