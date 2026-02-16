import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import NeonInput from '../components/NeonInput';
import NeonButton from '../components/NeonButton';
import StatusBadge from '../components/StatusBadge';
import { Search, MapPin, Calendar, Clock, AlertCircle } from 'lucide-react';

const TrackComplaint = () => {
    const [complaintId, setComplaintId] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!complaintId) return;

        setLoading(true);
        // Mock API search
        setTimeout(() => {
            setLoading(false);
            setResult({
                id: complaintId,
                summary: "Street light flickering near Central Park entrance causing visibility issues.",
                department: "Electricity",
                priority: "High",
                slaHeight: "24 Hours",
                status: "Progress", // Assigned, Progress, Resolved, Escalated
                date: "2026-01-07",
                location: "5th Avenue, Near Central Park"
            });
        }, 1500);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Search className="text-neon-cyan" />
                Track Complaint
            </h1>

            <GlassCard className="mb-8 border-neon-cyan/20">
                <form onSubmit={handleSearch} className="flex gap-4 items-end">
                    <NeonInput
                        label="Complaint ID"
                        placeholder="Enter Complaint ID (e.g. #1024)"
                        value={complaintId}
                        onChange={(e) => setComplaintId(e.target.value)}
                        className="flex-1"
                        required
                    />
                    <NeonButton variant="cyan" type="submit" isLoading={loading} className="mb-[1px]">
                        Check Status
                    </NeonButton>
                </form>
            </GlassCard>

            {result && (
                <GlassCard className="border-neon-cyan/50 shadow-glow-cyan animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-1">Complaint #{result.id}</h2>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Calendar className="w-4 h-4" /> Posted on {result.date}
                            </div>
                        </div>
                        <StatusBadge status={result.status} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-xs text-gray-500 uppercase font-semibold">Department</span>
                            <p className="text-lg text-white font-medium">{result.department}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-xs text-gray-500 uppercase font-semibold">Priority</span>
                            <div className="flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-orange-500" />
                                <p className="text-lg text-white font-medium">{result.priority}</p>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-xs text-gray-500 uppercase font-semibold">SLA Deadline</span>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-neon-cyan" />
                                <p className="text-lg text-white font-medium">{result.slaHeight}</p>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-xs text-gray-500 uppercase font-semibold">Location</span>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <p className="text-lg text-white font-medium">{result.location}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-xs text-gray-500 uppercase font-semibold">Issue Summary</span>
                        <p className="text-gray-300 mt-2 p-4 bg-black/20 rounded-lg border border-white/5">
                            {result.summary}
                        </p>
                    </div>
                </GlassCard>
            )}
        </div>
    );
};

export default TrackComplaint;
