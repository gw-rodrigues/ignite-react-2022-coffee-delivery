import styled from 'styled-components'

export const SuccessContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 2.5rem auto 9.81rem auto;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  header {
    flex: 1;
  }
`

export const SuccessContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    max-width: 492px;
    height: auto;
  }
`

export const StatusContainer = styled.div`
  max-width: 526px;
  width: 100%;
  height: 100%;
  max-width: 526px;

  background: ${(props) => props.theme['gradient-yellow-to-purple']};
  border-radius: 6px 36px;
  padding: 1px;
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
