import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DownloadIcon from '@mui/icons-material/Download';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { downloadCatImage } from '../../../store/features/catsSlice';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500]
        }
    },
    spacing: [0, 4, 8, 16, 32]
})

const ListCard = (props) => {
    const dispatch = useDispatch()

    const downloadImage = () => {
        dispatch(downloadCatImage(props.url))
    }

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 400, width:350  }}
                    image={ props.url }
                />
                <CardActions>
                    <div className="flex flex-wrap justify-center w-full">
                        <Tooltip placement="right" title="Download" arrow>
                            <IconButton onClick={ downloadImage } aria-label="vote">
                                <DownloadIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}

export default ListCard