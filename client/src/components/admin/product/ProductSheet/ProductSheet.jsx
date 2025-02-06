import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

function ProductSheet() {
    const brand = [{ name: "Samsung" }, { name: "realme" }, { name: "infinix" }, { name: "techno" },]
    const category = [{ name: "gaming" }, { name: "camera" }, { name: "day-to-day" }]


    return (
        <>
            <Sheet>

                <SheetTrigger asChild>
                    <Button varient="outline" type="button" className="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Add product
                    </Button>
                </SheetTrigger>

                <SheetContent className="overflow-y-auto">
                    <SheetHeader className='my-5'>
                        <h1 className='bg-slate-100 h-10 py-2 pl-2  w-full rounded-lg'>Add your Product</h1>
                    </SheetHeader>

                    <div className="flex items-center justify-center w-full">
                        <Label for="productImage" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <Input id="productImage" type="file" className="hidden" />
                        </Label>
                    </div>

                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">


                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="productName" placeholder="Enter product name" name='productName' className="col-span-3" />
                        </div>


                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>

                            <Textarea id="description" name='description' placeholder="Description" className="col-span-3" />

                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="category" className="text-right">
                                Category
                            </Label>
                            <Select>
                                <SelectTrigger className="w-[200px]">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {category.map((item, index) => {
                                        return (<>
                                            <SelectItem value={item.name}>{item.name} </SelectItem>

                                        </>)
                                    })}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Brand" className="text-right">
                                Brand
                            </Label>
                            <Select>
                                <SelectTrigger className="w-[200px]">
                                    <SelectValue placeholder="Brand" />
                                </SelectTrigger>
                                <SelectContent>
                                    {brand.map((item, index) => {
                                        return (<>
                                            <SelectItem value={item.name}>{item.name} </SelectItem>

                                        </>)
                                    })}
                                </SelectContent>
                            </Select>

                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Price
                            </Label>
                            <Input id="price" name='price' placeholder="Enter price" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="salePrice" className="text-right">
                                Sale Price
                            </Label>
                            <Input id="salePrice" name='salePrice' placeholder="Enter sale price" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="stock" className="text-right">
                                Stock
                            </Label>
                            <Input id="stock " name="stock" placeholder="Enter stock" className="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button className="w-full bg-blue-700" type="submit">Add Product</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </>
    )
}

export default ProductSheet