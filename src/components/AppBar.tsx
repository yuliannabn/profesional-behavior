import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

interface StyledAppBarProps {
    title: string;
    sections: string[];
}

const StyledAppBar = ({ title, sections }: StyledAppBarProps) => {
    return (
        <AppBar position="static" color="inherit">
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Link
						href="/"
						component="a"
                        variant="h6"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 500,
                            letterSpacing: '.25rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {title}
                    </Link>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5 }}>
                        {sections.map((section) => (
                            <Link key={section} href={`#${section}`} component="a" sx={{ color: 'black', display: 'block' }}>
                                {section}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}

export default StyledAppBar;
