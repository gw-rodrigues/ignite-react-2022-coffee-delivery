import styled from 'styled-components'

export const SuccessContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 2.5rem auto 9.81rem auto;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  flex-wrap: wrap;

  header {
    flex: 1 0 100%;
  }

  @media (max-width: 1200px) {
    padding: 0 1rem;
  }

  @media (max-width: 950px) {
    align-items: center;
  }
`

export const SuccessContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    display: block;
    width: 100%;
    max-width: 492px;
    height: auto;
  }

  @media (max-width: 950px) {
    gap: 1rem;
    flex-direction: column;
  }
`

export const StatusContainer = styled.div`
  flex: 1;
  min-width: 400px;
  max-width: 526px;
  width: 100%;
  height: 100%;

  background: ${(props) => props.theme['gradient-yellow-to-purple']};
  border-radius: 6px 36px;
  padding: 1px;

  @media (max-width: 500px) {
    min-width: 200px;
  }
`

const STATUS_ICON_COLOR = {
  purple: 'purple-500',
  'purple-light': 'purple-100',
  'purple-dark': 'purple-900',
  yellow: 'yellow-500',
  'yellow-light': 'yellow-100',
  ' yellow-dark': 'yellow-900',
} as const

interface IStatusIcoColor {
  bgColor: keyof typeof STATUS_ICON_COLOR
}

export const StatusInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem;
  background: ${(props) => props.theme.white};
  border-radius: inherit;

  @media (max-width: 400px) {
    padding: 1.5rem;
  }
`

export const StatusInnerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & + & {
    margin-top: 2rem;
  }
`

export const StatusIcon = styled.figure<IStatusIcoColor>`
  width: 32px;
  height: 32px;
  padding: 8px;
  background: ${(props) => props.theme[STATUS_ICON_COLOR[props.bgColor]]};
  border-radius: 1000px;

  svg {
    fill: ${(props) => props.theme.white};
  }
`
