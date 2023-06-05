import React from 'react'
import './pricing.css'

function Pricing() {
    return (
      <div class="container">
        <h1> Pricing </h1>
  <div class="row">
    <div class="col-1 align-self-start">
      <h2>Basic Photo Shoot</h2>
      <p>N10,000<br/>For this price range, you will be getting 10 soft copies in one costume and a single background</p>
    </div>
    <div class="col-2 align-self-center">
      <h2>Standard photo Shoot</h2>
      <p>N20,000<br/>For this price range, you will be getting 15 soft copies in two costumes and two different background</p>
    </div>
    <div class="col-3 align-self-end">
      <h2>Professional Photo Shoot</h2>
      <p>N40,000<br/>For this price range, you will be getting 20 soft copies in all different costumes and props you want with various background</p>
    </div>
  </div>
</div>
    )
}
export default Pricing;