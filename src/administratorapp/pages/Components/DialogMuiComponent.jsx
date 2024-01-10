/* eslint-disable react/prop-types */
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useEffect } from 'react'

/* eslint-disable space-before-function-paren */
/**
 * Mui responsive dialog component.
 * @props {title, state, setState, onConfirm}
 * @returns ReactComponent
 */
export default function ResponsiveDialog({ children, title, state, setState, onConfirm }) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  console.log(state)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const handleClose = () => setState(false)
  const onConfirmAction = () => {
    onConfirm()
    setState(false)
  }

  useEffect(() => {
    setOpen(state)
  }, [state])

  return (
    <>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          {title}
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={onConfirmAction} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
