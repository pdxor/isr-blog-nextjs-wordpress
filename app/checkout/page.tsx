import Cart from "@/components/icons/Cart";
import B1Text from "@/components/text/B1Text";
import H1Text from "@/components/text/H1Text";
import SH2Text from "@/components/text/SH2Text";


export default function Checkout() {
  return (
    <main className="">
<div className="">
  <H1Text text="Cart"/>
  <Cart fill={""} />
 <SH2Text text="2" color={""}/>
 <SH2Text text="Items |" color={""}/>
 <SH2Text text="$40.00" color={""}/>
 <B1Text text="Logged in as:"/>
 <SH2Text text="username@gmail.com" color="" />
 <SH2Text text="SHOW ORDER SUMMARY" color="" />

 <H1Text text="Total"/>
 <B1Text text="Order Summary:"/>
 <B1Text text="$40.00"/>
 <B1Text text="Discount Applied:"/>
 <B1Text text="-$20.00"/>
 <B1Text text="Order Summary:"/>

      </div>
      
    </main>
  )
}

// to do: everything, stopped on this page, because i'm not sure what the native stripe integration looks like and 
// we may be able to just use that. 