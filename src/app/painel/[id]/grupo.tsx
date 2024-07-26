'use client'

import { FC } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface PagControlProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PagControl: FC<PagControlProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const pathname = usePathname()
  const pag = searchParams.get('pag') ?? '1'
  const por_pag = searchParams.get('por_pag') ?? '10'

  return (
    <div className='mt-2 flex gap-4 items-center'>
      <button
        className='bg-blue-500 text-white p-1 rounded-md'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`${pathname}?pag=${Number(pag) - 1}&por_pag=${por_pag}`)
        }}>
        Prev
      </button>
      {/* Math.ceil(10 / Number(por_pag)) */}
      <div>
        {pag}
      </div>

      <button
        className='bg-blue-500 text-white p-1 rounded-md'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`${pathname}?pag=${Number(pag) + 1}&por_pag=${por_pag}`)
        }}>
        Prox
      </button>
    </div>
  )
}

export default PagControl