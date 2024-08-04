import React from 'react'
import nfts from '../../../public/data/nfts'
import Card from './Card'

function Products() {
  return (
    <section className='p-4 pb-24 text-white'> 
    <div className='container max-w-6xl max-auto overflow-hidden'>
        <div className='flex flex-col items-center text-center space-y-5'>
            <h1 className='text-2xl md:text-3xl font-medium' >Explore Hot Product</h1>
                <p className='text-slate-400 md:w-2/4 mx-auto '>we ar a huge marketplace dedicated to connectng great artist of all Techwind with fans and unique token collected</p>
            

            </div>
            {/*card*/}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 items-center justify-center '>
      {nfts.map((item, i) => (
        <Card key={i} item={item}/>
      ))}
    </div>

        </div>
    </section>

  )
}

export default Products