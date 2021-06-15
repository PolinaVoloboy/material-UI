import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    }
})

export default function Layout({ children }) {
    const classes = useStyles();
    /* app bar */

    /* side drawer */
    return (
        <div>
            <div className={classes.page}>
                {children}
            </div>
            
        </div>
    )
}
