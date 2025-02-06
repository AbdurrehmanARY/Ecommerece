import React from 'react'

import { Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow, } from '@/components/ui/table'
import TableTop from '@/components/admin/product/table/TableHead'
import ProductSheet from '@/components/admin/product/ProductSheet/ProductSheet'
function Product() {

const data=[{entry:'product'},{entry:'category'},{entry:'brand'},{entry:'price'},{entry:'salePrice'},{entry:'stock'},]



  return (
   <>
   <TableTop/>
   <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
    
     {data.map((item)=>{
      return(<>
      <TableHead className="w-[100px]">{item.entry}</TableHead>  
      </>)
      
     })}
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
    <TableCell className="font-medium">Product Name</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell >$250.00</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Credit Card</TableCell>
    </TableRow>
  </TableBody>


</Table>

   </> 
  )
}

export default Product