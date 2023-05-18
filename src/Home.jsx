import React from 'react'

export const Home = () => {
  return (
    <> <div id="rectangle1" />
    <div id="rectangle2" />
    <button
        onClick={() => open()}
        disabled={!ready}
        style={{ position: 'relative', zIndex: 1, color: 'white' }}
    >
        Start Earning Rewards!
    </button> </>
  )
}
export default Home;