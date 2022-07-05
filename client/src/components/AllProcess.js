// Initialization => Review => Proofing => Ready to Publish => Published

// initialized a book

// Name/Title of Book
// Document Upload in Word Only
// Summary of the Book
// Number of Authors
// Remark


import React from 'react'

const AllProcess = () => {
  return (
    <div>
        <input  type="text" placeholder='Title' /><br />
        <input type="text" placeholder='Document' /><br />
        <input type="email" placeholder='Summary' /><br />
        <input  type="text" placeholder='Number of Authors' /><br />
        <input type="text" placeholder='Remark' /><br />
     
        <input type="submit"  value='Review ' /><br />
    </div>
  )
}

export default AllProcess