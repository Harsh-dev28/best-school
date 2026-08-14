import React from 'react'


function Hero() {
    return (
        <section className='min-h-screen bg-[url(https://bestschool.net.in/templates/purity_iii/images/bg.jpg)] bg-cover bg-center text-white text-center pt-40 sm:pt-48 md:pt-56 lg:pt-60 px-4'>
            <div className='text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px]'>
                <span className='b'>Guide your child to a better future</span>
            </div>

            <div className='text-shadow-[1px 1px #222222]'>
                <h4 className='b text-[20px] sm:text-[24px] md:text-[27px] lg:text-[30px]'>Find the best school</h4>
            </div>


            <div className='c px-2'>
                <input type='text' placeholder=' Start typing city, zip, address or landmark' className='pt-1 w-full max-w-[600px] h-[38px]' />
            </div>

        </section>
    )
}

export default Hero
