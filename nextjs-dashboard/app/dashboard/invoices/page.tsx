(async function () {
  await new Promise((resolve) => setTimeout(resolve, 30000));
})
export default function Page() {
  return <p>Invoices Page</p>;
}
