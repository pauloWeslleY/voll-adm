import { COLORS } from '@/styles'
import { styled } from '@mui/material'
import { grey } from '@mui/material/colors'

export const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  background: COLORS.white,

  padding: theme.spacing(2.8),
  borderRadius: theme.spacing(3.5),
}))

export const CardContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(3.9),

  '& > img': {
    width: theme.spacing(20),
    height: theme.spacing(20),
    ObjectFit: 'cover',
    borderRadius: '50%',
    border: `2px solid ${theme.palette.primary.light}`,
  },
}))

export const CardInfo = styled('div')(({ theme }) => ({
  '& > h3': {
    ...theme.typography.h4,
    color: grey[700],
  },

  '& > p': {
    ...theme.typography.body1,
    color: grey[500],
  },
}))
