import WishlistCard from "./wishlistCard";

 

export default function WishlistComponent() {
  return (
    <div className="bg-gray-100 p-5 mx-5  rounded ">
    <div>
      <h2 className="text-lg font-semibold mb-9 capitalize">My Wishlist</h2>
    </div>
<div>
     <WishlistCard></WishlistCard>
    </div>
  </div>
  )
}
