// GlassHero Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material';
import { glassHeroSx } from '@/styles/components/dashboardView.styles';

// Components & Necessary Files 


// GlassHero Component 
export default function GlassHero({title, subtitle}){ 
    return(
        <Box sx={glassHeroSx.root}> 
            <Typography sx={glassHeroSx.title}>{title}</Typography>
            <Typography sx={glassHeroSx.subtitle}>{subtitle}</Typography>
        </Box>
    )
}