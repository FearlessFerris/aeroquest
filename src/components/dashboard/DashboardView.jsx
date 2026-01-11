'use client';
// DashboardView Component Implementation 


// Dependencies 
import { Box, Typography, Divider } from '@mui/material';


// Components & Necessary Files 
import { dashboardSx } from '@/styles/components/dashboardView.styles';
import GlassHero from './GlassHero';
import GlassCard from './GlassCard';


// DashboardView Component
export default function DashboardView({ user }) {
    const name = user?.name || user?.email?.split('@')?.[0] || 'Pilot';

    return (
        <Box sx={dashboardSx.root}>
            <Box sx={dashboardSx.starfield} />
            <Box sx={dashboardSx.content}>
                <Box sx={dashboardSx.heroWrap}>
                    <GlassHero
                        title={`Welcome back, ${name}.`}
                        subtitle="Your cockpit for planning, tracking, and building your Aeroquest experience."
                    />
                </Box>
                <Box sx={dashboardSx.gridRow}>
                    <GlassCard title='Quick Action' subtitle='Start something meaningful in one click' /> 
                    <GlassCard title='Your Progress' subtitle='Track what matters without clutter' /> 
                    <GlassCard title='Next Steps' subtitle='Keep momentum with a clear plan' /> 
                </Box>
            </Box>
        </Box>
    );
}
