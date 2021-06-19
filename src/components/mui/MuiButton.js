import { Button } from "@material-ui/core"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {accent2, primary3} from '../../theme.json';
import clsx from "clsx";

const useStyles = makeStyles(() => createStyles({
    root: {
        background: accent2,
        margin: '1rem',
        borderRadius: '.9rem',
        padding: '.7rem 1.2rem',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/binding-dark.png")',
        backgroundBlendMode: 'overlay',
        letterSpacing: '.1rem',
        textTransform: 'none',
        boxShadow: '0px 0px 15px 5px #000000',
        transition: '.15s ease-in',
        color: primary3,
        '&:hover': {
            background: accent2,
            filter: 'brightness(150%)',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/binding-dark.png")',
            backgroundBlendMode: 'overlay',
            transition: '.15s ease-in',
            transform: 'scale(1.05)',
        },
        '&:active': {
            transform: 'scale(0.95)',
            transition: '.1s ease-in',
        }
    }
}))

function MuiButton({children, muiStyles}) {
    const classes = useStyles();
    return <Button className={clsx(classes.root, muiStyles)}>{children}</Button>
}

export default MuiButton;