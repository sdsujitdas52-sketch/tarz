import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '৳ 1,24,500', icon: DollarSign, trend: '+12%' },
    { label: 'Orders', value: '142', icon: ShoppingBag, trend: '+5%' },
    { label: 'Customers', value: '89', icon: Users, trend: '+18%' },
    { label: 'Conversion', value: '3.2%', icon: TrendingUp, trend: '+1.2%' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold font-serif text-primary mb-6">Dashboard Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-primary">
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold font-serif mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium uppercase tracking-wider text-xs">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Date</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium">#TRZ-00{i}</td>
                  <td className="p-4">Customer {i}</td>
                  <td className="p-4">Today, 10:{i}0 AM</td>
                  <td className="p-4">৳ 4,500</td>
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      Processing
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
