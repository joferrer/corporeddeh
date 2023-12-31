/* eslint-disable react/prop-types */
import styled from '@emotion/styled'
import { Add, Clear } from '@mui/icons-material'
import { Button, Grid } from '@mui/material'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

export const ImagesAdminComponent = ({ images = [], index, onImgDelete, onFileInputClick }) => {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'

      }}
    >
      {
        images?.map((img, i) => (
          <Grid
            key={i} sx={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '10px'
            }}
          >
            <img
              style={{
                width: '100px',
                maxHeight: '200px',
                objectFit: 'cover'

              }} key={i} src={img} alt='img'
            />
            <Button
              sx={{ position: 'relative', top: '-20px' }}
              onClick={() => onImgDelete(index, i)}
            ><Clear color='error' fontSize='large' />
            </Button>
          </Grid>
        ))
      }
      <Button
        component='label'
        variant='contained'
        sx={{
          height: 'fit-content',
          width: 'fit-content',
          padding: '2px',
          minWidth: 'fit-content'
        }}
        onChange={(e) => onFileInputClick(e, index)}
      >
        <Add fontSize='large' />
        <VisuallyHiddenInput type='file' accept='image/*' />
      </Button>

    </Grid>
  )
}
