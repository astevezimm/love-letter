import {memo, useEffect, useState} from 'react'

const NUM_IMAGES = 77
const smImages = [1,4,7,19,21,22,25,27,32,39,41,42,47,51,63,65,72]
const mdImages = [
  5,6,9,10,11,16,17,18,20,23,26,28,30,35,38,40,44,45,48,52,53,
  54,55,56,57,58,59,60,61,62,64,66,67,68,69,70,71,73,74,75,76,77
]
const lgImages = [2,3,8,12,13,14,15,24,29,31,33,34,36,37,43,46,49,50]

export function generateRandomArray(): number[] {
  const array = Array.from({ length: NUM_IMAGES }, (_, i) => i + 1)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) as number
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function Drawings({drawings}: { drawings: number[] }) {
  return (
    <ul>
      {drawings.map(num => (
        <li key={num}>
          <img
            src={`/images/i${String(num).padStart(2, "0")}.jpg`}
            alt={`Image ${num}`}
            className={smImages.includes(num) ? "sm-img" : lgImages.includes(num) ? "lg-img" : "md-img"}
          />
        </li>
      ))}
    </ul>
  )
}
