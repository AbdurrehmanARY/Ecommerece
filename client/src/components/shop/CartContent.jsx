import React from 'react'
import {   Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
   } from '../ui/sheet';
   import { Button } from '../ui/button';
   import { Label } from '../ui/label';
import { Input } from '../ui/input';
import CartItemContent from './CartItemContent';
function CartContent() {
  return (
    <>
     <SheetContent className="sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4">
        {/* {cartItems && cartItems.length > 0
          ? cartItems.map((item) => <UserCartItemsContent cartItem={item} />)
          : null} */}
<CartItemContent/>
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">total amount</span>
        </div>
      </div>
      <Button
        // onClick={() => {
        //   navigate("/shop/checkout");
        //   setOpenCartSheet(false);
        // }}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </SheetContent>
    
    </>
  )
}

export default CartContent