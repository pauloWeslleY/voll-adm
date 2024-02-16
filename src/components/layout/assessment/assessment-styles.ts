import { styled } from '@mui/material'

export const AssessmentWrap = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3.6),

  marginTop: theme.spacing(1.6),
}))
