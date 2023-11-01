import OrderComponent from '@/components/UserDashboard/orders'
import ProfileComponent from '@/components/UserDashboard/profile'
import UserLayot from '@/components/Layots/UserDashbordLayot.tsx/UserLayot'
import { useRouter } from 'next/router'
import React from 'react'
import AddressComponent from '@/components/UserDashboard/address'
import ChangePasswordComponent from '@/components/UserDashboard/changePassword'
import ReviewComponent from '@/components/UserDashboard/review'
import WishlistComponent from '@/components/UserDashboard/wishlist'

export default function DynamicComponent() {
    const {query} =  useRouter()
    
  return (
    <div>
        <UserLayot>
          
         
         
            {
                (query?.sub === "profile") && <ProfileComponent/>
            }
            {
                (query?.sub === "address") && <AddressComponent/>
            }
            {
                (query?.sub === "password") && <ChangePasswordComponent/>
            }
             {
                (query?.sub === "order") && <OrderComponent/>
            }
             {
                (query?.sub === "review") && <ReviewComponent/>
            }
             {
                (query?.sub === "wishlist") && <WishlistComponent/>
            }
            
        </UserLayot>
    </div>
  )
}
