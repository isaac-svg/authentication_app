import React from 'react'

const page = () => {
  return (
    <section className='grid px-page-padding bg-foreground-light dark:bg-foreground-dark'>
      <h3>Personal Info</h3>
      <span>Basic info, like your name and photo</span>

      <div className="mx-auto border-2 border-custom-ash rounded-lg">
        <div className='flex justify-between'>
          {/* description goes here */}
          <div>
            <h5>Profile</h5>
            <p>Some info may be visible to other people</p>
          </div>
          <div>
            <button>Edit</button>
          </div>
        </div>
        <div className="">
          {/* user datails goes here */}
        </div>
      </div>
    </section>
  )
}

export default page