import { Rating } from '@mui/material'
import { ProfessionalProps } from '@/components/types'
import * as S from './card-styles'

type CardAssessmentProps = {
  card: ProfessionalProps
}

export const CardAssessment = ({ card }: CardAssessmentProps) => {
  console.log(card)

  return (
    <S.Card>
      <S.CardContent>
        <img
          src={card.image}
          alt={`Foto de Perfil do Profissional ${card.name}`}
        />
        <S.CardInfo>
          <h3>{card.name}</h3>
          <p>{card.specialty}</p>
        </S.CardInfo>
      </S.CardContent>

      <Rating name="simple-controlled" value={card.note} readOnly={true} />
    </S.Card>
  )
}
