import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}
