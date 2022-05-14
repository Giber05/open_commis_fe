import OrderTable from './components/OrderTable';

function OrderPage() {
  return (
    <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8" >
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Pesanan Konsumen Anda</h2>
        <div>
            <OrderTable/>
        </div>
    </div>
  )
}

export default OrderPage;