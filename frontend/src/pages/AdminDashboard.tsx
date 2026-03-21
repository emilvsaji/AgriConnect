import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthenticationContext";
import {
  HiUsers,
  HiShoppingBag,
  HiClipboardList,
  HiTrash,
  HiCurrencyRupee,
  HiViewGrid,
} from "react-icons/hi";
import { FaSeedling, FaTools, FaChartLine, FaShieldAlt } from "react-icons/fa";

const API_URL = "http://localhost:5000/api/admin";

type Tab = "overview" | "users" | "products" | "orders" | "tools";

interface Stats {
  users: number;
  products: number;
  orders: number;
  tools: number;
  revenue: number;
}

interface UserItem {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt?: string;
}

interface ProductItem {
  _id: string;
  name: string;
  category: string;
  price?: number;
  farmer: string;
  buyType: string;
  imageUrl: string;
  currentPrice?: number;
}

interface OrderItem {
  _id: string;
  customerDetails: { name: string; email: string; phone?: string };
  products: { name: string; price: number; quantity: number }[];
  totalAmount: number;
  status: "Confirmed" | "Ready for Pickup" | "Completed";
  farmer: string;
  createdAt: string;
}

interface ToolItem {
  _id: string;
  name: string;
  category: string;
  pricePerDay: number;
  location: string;
  available: boolean;
  listedBy?: { name: string };
}

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [stats, setStats] = useState<Stats>({ users: 0, products: 0, orders: 0, tools: 0, revenue: 0 });
  const [users, setUsers] = useState<UserItem[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [tools, setTools] = useState<ToolItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const headers = { "x-user-id": user?._id || "" };

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  const fetchData = useCallback(async () => {
    if (!user || user.role !== "admin") return;
    setLoading(true);
    setError("");
    try {
      const opts = { headers };
      const [statsRes, usersRes, productsRes, ordersRes, toolsRes] = await Promise.all([
        fetch(`${API_URL}/stats`, opts),
        fetch(`${API_URL}/users`, opts),
        fetch(`${API_URL}/products`, opts),
        fetch(`${API_URL}/orders`, opts),
        fetch(`${API_URL}/tools`, opts),
      ]);
      if (!statsRes.ok || !usersRes.ok || !productsRes.ok || !ordersRes.ok || !toolsRes.ok) {
        throw new Error("Failed to fetch admin data.");
      }
      setStats(await statsRes.json());
      setUsers(await usersRes.json());
      setProducts(await productsRes.json());
      setOrders(await ordersRes.json());
      setTools(await toolsRes.json());
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDeleteUser = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`${API_URL}/users/${id}`, { method: "DELETE", headers });
      if (!res.ok) throw new Error("Failed to delete user.");
      fetchData();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`${API_URL}/products/${id}`, { method: "DELETE", headers });
      if (!res.ok) throw new Error("Failed to delete product.");
      fetchData();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleOrderStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`${API_URL}/orders/${id}/status`, {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update order status.");
      setOrders((prev) => prev.map((o) => (o._id === id ? { ...o, status: status as OrderItem["status"] } : o)));
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteTool = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this tool?")) return;
    try {
      const res = await fetch(`${API_URL}/tools/${id}`, { method: "DELETE", headers });
      if (!res.ok) throw new Error("Failed to delete tool.");
      fetchData();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700 border-green-200";
      case "Ready for Pickup": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Confirmed": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "overview", label: "Overview", icon: <HiViewGrid className="w-5 h-5" /> },
    { key: "users", label: "Users", icon: <HiUsers className="w-5 h-5" /> },
    { key: "products", label: "Products", icon: <HiShoppingBag className="w-5 h-5" /> },
    { key: "orders", label: "Orders", icon: <HiClipboardList className="w-5 h-5" /> },
    { key: "tools", label: "Tools", icon: <FaTools className="w-5 h-5" /> },
  ];

  if (!user || user.role !== "admin") return null;

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {[
        { label: "Total Users", value: stats.users, icon: <HiUsers className="w-8 h-8 text-blue-600" />, bg: "bg-blue-100" },
        { label: "Total Products", value: stats.products, icon: <FaSeedling className="w-8 h-8 text-green-600" />, bg: "bg-green-100" },
        { label: "Total Orders", value: stats.orders, icon: <HiClipboardList className="w-8 h-8 text-orange-600" />, bg: "bg-orange-100" },
        { label: "Total Tools", value: stats.tools, icon: <FaTools className="w-8 h-8 text-purple-600" />, bg: "bg-purple-100" },
        { label: "Total Revenue", value: `₹${stats.revenue.toLocaleString("en-IN")}`, icon: <HiCurrencyRupee className="w-8 h-8 text-emerald-600" />, bg: "bg-emerald-100" },
      ].map((stat) => (
        <div key={stat.label} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-green-200 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`${stat.bg} p-4 rounded-xl`}>{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderUsers = () => (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <th className="text-left py-4 px-6 font-semibold">Name</th>
              <th className="text-left py-4 px-6 font-semibold">Email</th>
              <th className="text-left py-4 px-6 font-semibold">Role</th>
              <th className="text-right py-4 px-6 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={u._id} className={`border-b border-gray-100 hover:bg-green-50/50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <td className="py-4 px-6 font-medium text-gray-900">{u.name}</td>
                <td className="py-4 px-6 text-gray-600">{u.email}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${u.role === "admin" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                    {u.role}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  {u.role !== "admin" && (
                    <button onClick={() => handleDeleteUser(u._id)} className="inline-flex items-center space-x-1 bg-red-50 text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-100 transition-colors text-sm">
                      <HiTrash className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr><td colSpan={4} className="py-12 text-center text-gray-500">No users found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? products.map((product) => (
        <div key={product._id} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative h-48">
            <img src={product.imageUrl || "https://placehold.co/600x400"} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.buyType === "auction" ? "bg-orange-500 text-white" : "bg-green-500 text-white"}`}>
                {product.buyType === "auction" ? "Auction" : "Direct Sale"}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-1">{product.category}</p>
            <p className="text-xs text-gray-400 mb-3">by {product.farmer}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-green-600">
                {product.buyType === "auction" ? `₹${product.currentPrice}` : `₹${product.price}`}
              </span>
              <button onClick={() => handleDeleteProduct(product._id)} className="inline-flex items-center space-x-1 bg-red-50 text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-100 transition-colors text-sm">
                <HiTrash className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      )) : (
        <div className="col-span-full bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-gray-100">
          <HiShoppingBag className="w-10 h-10 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      {orders.length > 0 ? orders.map((order) => (
        <div key={order._id} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-green-200 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Order #{order._id.slice(-8).toUpperCase()}
              </h3>
              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                {" "}&middot; Farmer: <span className="font-medium">{order.farmer}</span>
              </p>
            </div>
            <p className="text-2xl font-bold text-green-600 mt-2 md:mt-0">₹{order.totalAmount.toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <HiUsers className="w-4 h-4 mr-2 text-green-600" /> Customer
              </h4>
              <p className="text-sm text-gray-900 font-medium">{order.customerDetails.name}</p>
              <p className="text-xs text-gray-600">{order.customerDetails.email}</p>
              {order.customerDetails.phone && <p className="text-xs text-gray-600 mt-1">{order.customerDetails.phone}</p>}
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <HiClipboardList className="w-4 h-4 mr-2 text-green-600" /> Items
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {order.products.map((p, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span>{p.name} x{p.quantity}</span>
                    <span className="font-medium">₹{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <span className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${getStatusColor(order.status)}`}>
              {order.status}
            </span>
            <div className="flex items-center space-x-3">
              <label className="text-sm font-semibold text-gray-700">Update:</label>
              <select
                value={order.status}
                onChange={(e) => handleOrderStatus(order._id, e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white font-semibold text-gray-700 cursor-pointer hover:border-gray-300 transition-all"
              >
                <option value="Confirmed">Confirmed</option>
                <option value="Ready for Pickup">Ready for Pickup</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
      )) : (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-gray-100">
          <HiClipboardList className="w-10 h-10 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No orders found.</p>
        </div>
      )}
    </div>
  );

  const renderTools = () => (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <th className="text-left py-4 px-6 font-semibold">Name</th>
              <th className="text-left py-4 px-6 font-semibold">Category</th>
              <th className="text-left py-4 px-6 font-semibold">Price/Day</th>
              <th className="text-left py-4 px-6 font-semibold">Location</th>
              <th className="text-left py-4 px-6 font-semibold">Status</th>
              <th className="text-left py-4 px-6 font-semibold">Listed By</th>
              <th className="text-right py-4 px-6 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, idx) => (
              <tr key={tool._id} className={`border-b border-gray-100 hover:bg-green-50/50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <td className="py-4 px-6 font-medium text-gray-900">{tool.name}</td>
                <td className="py-4 px-6 text-gray-600">{tool.category}</td>
                <td className="py-4 px-6 text-gray-900 font-semibold">₹{tool.pricePerDay}/day</td>
                <td className="py-4 px-6 text-gray-600">{tool.location}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${tool.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {tool.available ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-600">{tool.listedBy?.name || "N/A"}</td>
                <td className="py-4 px-6 text-right">
                  <button onClick={() => handleDeleteTool(tool._id)} className="inline-flex items-center space-x-1 bg-red-50 text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-100 transition-colors text-sm">
                    <HiTrash className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
            {tools.length === 0 && (
              <tr><td colSpan={7} className="py-12 text-center text-gray-500">No tools found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600 mx-auto mb-4"></div>
            <p className="text-lg font-semibold text-gray-700">Loading admin data...</p>
          </div>
        </div>
      );
    }
    if (error) {
      return (
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      );
    }
    switch (activeTab) {
      case "overview": return renderOverview();
      case "users": return renderUsers();
      case "products": return renderProducts();
      case "orders": return renderOrders();
      case "tools": return renderTools();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg mb-4">
                <FaShieldAlt className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-gray-700">Admin Dashboard</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Admin
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> Control Panel</span>
              </h1>
              <p className="text-lg text-gray-600">Manage all users, products, orders, and tools across AgriConnect</p>
            </div>
            <div className="inline-flex items-center space-x-3 bg-white rounded-xl px-6 py-4 shadow-lg border-2 border-gray-100">
              <FaChartLine className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-xs text-gray-500">Total Revenue</p>
                <p className="text-xl font-bold text-green-600">₹{stats.revenue.toLocaleString("en-IN")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 mb-8">
          <nav className="flex space-x-2 p-2 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-bold text-sm transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.key !== "overview" && (
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === tab.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {tab.key === "users" ? stats.users : tab.key === "products" ? stats.products : tab.key === "orders" ? stats.orders : stats.tools}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
