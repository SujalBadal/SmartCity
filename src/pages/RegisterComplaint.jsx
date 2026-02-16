import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonInput from '../components/NeonInput';
import NeonTextarea from '../components/NeonTextarea';
import NeonButton from '../components/NeonButton';
import ImageUploader from '../components/ImageUploader';
import { Send, MapPin } from 'lucide-react';

const RegisterComplaint = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        description: '',
        location: '',
        image: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call
        console.log('Submitting complaint:', formData);
        setTimeout(() => {
            setLoading(false);
            // Navigate to track page with a mock ID or just alert
            navigate('/user/complaint/track');
        }, 2000);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <MapPin className="text-neon-cyan" />
                Report an Issue
            </h1>

            <GlassCard className="border-neon-cyan/20">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <NeonTextarea
                        label="Describe the Issue"
                        placeholder="Please provide detailed information about the problem..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                        className="min-h-[150px]"
                    />

                    <NeonInput
                        label="Location"
                        placeholder="e.g. 5th Avenue, Near Central Park"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                    />

                    <ImageUploader
                        onImageSelect={(file) => setFormData({ ...formData, image: file })}
                    />

                    <div className="pt-4">
                        <NeonButton variant="cyan" type="submit" isLoading={loading} className="w-full">
                            Submit Complaint <Send className="w-4 h-4 ml-2" />
                        </NeonButton>
                    </div>
                </form>
            </GlassCard>
        </div>
    );
};

export default RegisterComplaint;
