import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Typography } from '@material-ui/core';




// const useStyles = makeStyles((theme) => ({
//     root: {
//         color: theme.status.danger,
//         '&$checked': {
//             color: theme.status.danger,
//         }
//     },
//     checked: {},

// }));

// function CustomCheckbox() {
//     const classes = useStyles();

//     return (
//         <Checkbox
//             defaultChecked
//             classes={{
//                 root: classes.root,
//                 checked: classes.checked,
//             }}
//         />
//     );
// }

export default function MaterialUIDemo() {


    return (
        <Box component="div" display="flex" justifyContent="center" alignItems="center" marginTop='2rem'>
            {/* <Box>
                <CustomCheckbox />
            </Box> */}
            {/* <Box> */}
            <Typography variant="h3" component="h2">This is Material UI Demo</Typography>
            {/* </Box> */}
        </Box>

    );
}
