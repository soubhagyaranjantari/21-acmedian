import React, { useEffect, useState } from 'react'

const Color = () => {
  const [color, setColor] = useState('black')
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const colorUitil = (length) => {
    return Math.floor(Math.random() * length)
  }

  const createRandomHexColor = () => {
    const hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hex = '#'

    for (let i = 0; i < 6; i++) {
      hex += hexColor[colorUitil(hexColor.length)]
    }
    setColor(hex)
    console.log(color);

  }
  const createRandomRgbColor = () => {
    const r = colorUitil(256)
    const g = colorUitil(256)
    const b = colorUitil(256)
    setColor(`rgb(${r},${g},${b})`)
    console.log(color);

  }

  useEffect(() => {
    if (typeOfColor === 'rgb') createRandomRgbColor()
    else createRandomHexColor()
  }, [typeOfColor])
  const [input, setInput] = useState(null)
  function handleInput(e) {
    setInput(e.target.value.toLowerCase())
  }
  const handleColor = () => {
    if (typeOfColor === 'hex' ) {
      createRandomHexColor() 
    }
    else createRandomRgbColor()
    setInput(null)
  }
  return (
    <div style={{
      height: '100vh',
      width: "100vw",
      background: input ? input : color

    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding:"20px 0 0 0 "}}>
        <input type="text" onChange={handleInput} placeholder='Type a color u want to set'/>

        <button style={{ padding: '10px 20px' }} onClick={() => setTypeOfColor('hex')}>
          HEX
        </button>
        <button style={{ padding: '10px 20px' }} onClick={() => setTypeOfColor('rgb')}>
          RGB
        </button>
        <button style={{ padding: '10px 20px' }} onClick={handleColor}>
          Random Color
        </button>
      </div>

      <h1>{typeOfColor === 'rgb' ? 'rbg Color' : 'HEX Color'}</h1>
      <h3>{color}</h3>

    </div>
  )
}

export default Color