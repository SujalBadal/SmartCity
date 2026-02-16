import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Cell } from 'recharts';
import GlassCard from '../components/GlassCard';

const dataTrend = [
    { name: 'Mon', complaints: 40, resolved: 24 },
    { name: 'Tue', complaints: 30, resolved: 13 },
    { name: 'Wed', complaints: 20, resolved: 58 },
    { name: 'Thu', complaints: 27, resolved: 39 },
    { name: 'Fri', complaints: 18, resolved: 48 },
    { name: 'Sat', complaints: 23, resolved: 38 },
    { name: 'Sun', complaints: 34, resolved: 43 },
];

const dataDept = [
    { name: 'PWD', value: 400, color: '#00f3ff' },
    { name: 'Electricity', value: 300, color: '#bc13fe' },
    { name: 'Sanitation', value: 300, color: '#0aff0a' },
    { name: 'Municipal', value: 200, color: '#3145ff' },
];

const AdminAnalytics = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-white">System Analytics</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Trend Chart */}
                <GlassCard className="border-neon-cyan/20">
                    <h2 className="text-xl font-bold text-white mb-6">Weekly Complaint Trends</h2>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={dataTrend} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorComplaints" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#bc13fe" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#bc13fe" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00f3ff" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#00f3ff" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={true} vertical={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#050510', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="complaints" stroke="#bc13fe" fillOpacity={1} fill="url(#colorComplaints)" />
                                <Area type="monotone" dataKey="resolved" stroke="#00f3ff" fillOpacity={1} fill="url(#colorResolved)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>

                {/* Dept Bar Chart */}
                <GlassCard className="border-neon-green/20">
                    <h2 className="text-xl font-bold text-white mb-6">Department Workload</h2>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dataDept}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={true} vertical={false} />
                                <XAxis dataKey="name" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#050510', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }} />
                                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                    {dataDept.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>

            </div>
        </div>
    );
};

export default AdminAnalytics;
