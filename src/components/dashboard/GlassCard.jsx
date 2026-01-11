// GlassCard Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material'; 
import { glassCardSx } from '@/styles/components/dashboardView.styles';


// Components & Necessary Files 


// GlassCard Component Implementation 
export default function GlassCard({title, subtitle}){ 
    return( 
        <Box sx={glassCardSx.root}> 
            <Typography sx={glassCardSx.title}>{title}</Typography>
            <Typography sx={glassCardSx.subtitle}>{subtitle}</Typography>
        </Box>
    )
}