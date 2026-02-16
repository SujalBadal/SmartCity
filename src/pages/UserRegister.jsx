import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonInput from '../components/NeonInput';
import NeonButton from '../components/NeonButton';

const UserRegister = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        // Mock register
        setTimeout(() => {
            setLoading(false);
            navigate('/user/login');
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <GlassCard className="w-full max-w-md border-neon-cyan/20">
                <h2 className="text-3xl font-bold text-center mb-2 text-white">Join SmartCity</h2>
                <p className="text-center text-gray-400 mb-8">Create your citizen account</p>

                <form onSubmit={handleRegister} className="flex flex-col gap-6">
                    <NeonInput
                        label="Username"
                        placeholder="Choose a username"
                        required
                    />
                    <NeonInput
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <NeonInput
                        label="Password"
                        type="password"
                        placeholder="Create a strong password"
                        required
                    />

                    <NeonButton variant="cyan" type="submit" isLoading={loading} className="w-full mt-2">
                        Create Account
                    </NeonButton>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link to="/user/login" className="text-neon-cyan hover:underline">
                        Login here
                    </Link>
                </div>
            </GlassCard>
        </div>
    );
};

export default UserRegister;
