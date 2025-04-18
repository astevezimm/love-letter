const NUM_IMAGES = 77

function generateRandomArray(): number[] {
  const array = Array.from({ length: NUM_IMAGES }, (_, i) => i + 1)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) as number
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function MainPage() {
  return (
    <ul>
      {generateRandomArray().map(num => (
        <li key={num}>
          <img
            src={`/images/i${String(num).padStart(2, "0")}.jpg`}
            alt={`Image ${num}`}
          />
        </li>
      ))}
    </ul>
  )
}
