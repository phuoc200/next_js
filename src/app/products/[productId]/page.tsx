export default function Review({ params }: { params: { productId: string } }) {
  return <div>Products page details {params.productId}</div>;
}
