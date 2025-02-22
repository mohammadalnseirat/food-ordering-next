import { formatCurrency } from '@/lib/formatts'
import Image from 'next/image'
import AddToCartButton from './AddToCartButton'
import { ProductWithRelations } from '@/types/product.type'

function MenuItem({item}:{item:ProductWithRelations}) {
  return (
    <li className='flex flex-col items-center gap-2 p-4 border rounded-lg relative'>
              <div className="relative size-48 mx-auto">
                <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover "
                />
              </div>
              <div className="flex items-center w-full justify-between mb-4">
                <h4 className="my-3 text-xl font-semibold">{item.name}</h4>
                <strong className="text-gray-500">
                  {formatCurrency(item.basePrice)}
                </strong>
              </div>
              <p className="text-gray-600 text-sm md:text-md line-clamp-3 font-medium">{item.description}</p>
              <AddToCartButton item={item}/>
            </li>
  )
}

export default MenuItem