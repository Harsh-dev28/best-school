import React from 'react'


function Hero() {
    return (
        <section className='min-h-screen bg-[url(https://bestschool.net.in/templates/purity_iii/images/bg.jpg)] bg-cover bg-center text-white text-center pt-60'>
            <div className='text-[42px]'>
                <span className='b'>Guide your child to a better future</span>
            </div>

            <div className='text-shadow-[1px 1px #222222]'>
                <h4 className='b text-[30px]'>Find the best school</h4>
            </div>


            <div className='c'>
                <input type='text' placeholder=' Start typing city, zip, address or landmark' className='pt-1 w-[600px] h-[38px]' />
            </div>

        </section>
    )
}

export default Hero