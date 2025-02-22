'use client';

import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from "next/image";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { formatCurrency } from "@/lib/formatts";
import { Checkbox } from "../ui/checkbox";
import { VscClose, VscDebugBreakpointData } from "react-icons/vsc";


//! Dummy Data for sizes:
const sizes = [
  {id:crypto.randomUUID(),name:'Small',price:0},
  {id:crypto.randomUUID(),name:'Medium',price:4},
  {id:crypto.randomUUID(),name:'Large',price:8}
]

//! Dummy Data for extras:
const extras = [
  {id:crypto.randomUUID(),name:'Extra cheese',price:5},
  {id:crypto.randomUUID(),name:'Extra sauce',price:10},
  {id:crypto.randomUUID(),name:'Extra toppings',price:15}
]
function AddToCartButton({item}:{item:any}) {
  return (
    
    <Dialog>
    <DialogTrigger asChild>
    <Button  type="button" size={"lg"} className="mt-4 rounded-full text-white !px-8">
       <span> Add To Cart</span>
    </Button>
    </DialogTrigger>
    <DialogContent className="max-w-[300px] sm:max-w-[425px] max-h-[80vh] overflow-y-auto bg-gray-100">
      
      <DialogHeader className="flex items-center">
        <Image src={item.image} alt={item.name} width={200} height={200} className="rounded-lg size-[200px] object-cover"/>
        <DialogTitle>{item.name}</DialogTitle>
        <DialogDescription className="text-center">
          {item.description}
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-10">
        <div className="space-y-4 text-center">
          <Label htmlFor="pick-size" className="capitalize text-xl font-semibold text-gray-900 flex items-center gap-2"> 
            <VscDebugBreakpointData className="size-4 text-primary"/>
            pick your size?
            </Label>
          <PickYourSize sizes={sizes} item={item}/>
        </div>
        <div className="space-y-4 text-center">
        <Label htmlFor="pick-size" className="capitalize text-xl font-semibold text-gray-900 flex items-center gap-1">
        <VscDebugBreakpointData className="size-4 text-primary"/>
          Any Extras?
          </Label>
        <Extra extras={extras} item={item}/>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" className="w-full h-10">Add To Cart</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  )
}

export default AddToCartButton





 function PickYourSize({sizes,item}:{sizes:any;item:any}) {
  return (
    
    <RadioGroup defaultValue="comfortable">
      {
        sizes.map((size:any) => (
          <div key={size.id} className="flex items-center space-x-3 rounded-md border border-gray-400 p-4 cursor-pointer group hover:bg-gray-50">
            <RadioGroupItem value={size.name} id={size.id} />
            <Label htmlFor={size.id} className="space-x-2  font-medium cursor-pointer not-italic">
              <span className="uppercase text-md text-gray-700 ">{size.name}</span>
            <span className=" text-gray-400 ">{formatCurrency(size.price + item.basePrice)}</span>
            </Label>
          </div>
        ))
      }
    </RadioGroup>
  )
}


function Extra({extras,item}:{extras:any;item:any}) {
  return (
        extras.map((extra:any) => (
          <div key={extra.id} className="flex items-center space-x-3 rounded-md border border-gray-400 p-4 cursor-pointer group hover:bg-gray-50">
            <Checkbox id={extra.id} />
            <Label htmlFor={extra.id} className="space-x-2  font-medium not-italic cursor-pointer">
              <span className="uppercase text-md text-gray-700">{extra.name}</span>
            <span className=" text-gray-400">{formatCurrency(extra.price + item.basePrice)}</span>
            </Label>
          </div>
        ))
      
  )
}

