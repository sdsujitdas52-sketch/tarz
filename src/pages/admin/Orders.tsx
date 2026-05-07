import { useState } from 'react';
import { Search, Filter, Eye, MoreHorizontal } from 'lucide-react';

export default function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState('');

  const mockOrders = [
    { id: 'TRZ-1001', customer: 'Sujit Das', phone: '01711223344', date: 'Oct 24, 2024', total: 4500, status: 'Completed', payment: 'bKash' },
    { id: 'TRZ-1002', customer: 'Rahim Uddin', phone: '01811223344', date: 'Oct 24, 2024', total: 2800, status: 'Processing', payment: 'COD' },
    { id: 'TRZ-1003', customer: 'Karim Ali', phone: '01911223344', date: 'Oct 23, 2024', total: 12500, status: 'Pending', payment: 'Nagad' },
    { id: 'TRZ-1004', customer: 'Julekha Begum', phone: '01611223344', date: 'Oct 23, 2024', total: 1850, status: 'Cancelled', payment: 'bKash' },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold font-serif text-primary">Orders</h1>
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-gray-100 mb-6">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-xs">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by order ID or phone..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-sm text-sm font-medium text-gray-600 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Status
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 font-medium uppercase tracking-wider text-xs">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer Info</th>
                <th className="p-4">Date</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-primary">{order.id}</td>
                  <td className="p-4">
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-gray-500 text-xs">{order.phone}</div>
                  </td>
                  <td className="p-4 text-gray-600">{order.date}</td>
                  <td className="p-4 text-gray-600">{order.payment}</td>
                  <td className="p-4 font-medium">৳ {order.total.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold
                      ${order.status === 'Completed' ? 'bg-green-100 text-green-700' : ''}
                      ${order.status === 'Processing' ? 'bg-blue-100 text-blue-700' : ''}
                      ${order.status === 'Pending' ? 'bg-orange-100 text-orange-700' : ''}
                      ${order.status === 'Cancelled' ? 'bg-red-100 text-red-700' : ''}
                    `}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-sm transition-colors border border-gray-200">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-sm transition-colors border border-gray-200">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          Showing 1 to {mockOrders.length} of {mockOrders.length} entries
        </div>
      </div>
    </div>
  );
}
