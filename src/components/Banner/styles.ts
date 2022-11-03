import styled from 'styled-components'

import BannerBG from '../../assets/Banner-Background.svg'

export const BannerContainer = styled.div`
  width: 100%;
  min-height: 544px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  background: transparent url('${BannerBG}') no-repeat;
  background-size: cover;

  header {
    max-width: 588px;

    p {
      font-size: 1.25rem;
      font-stretch: 100%;
      color: ${(props) => props.theme['gray-800']};
    }

    ul {
      margin-top: 4.125rem;
      width: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;

      list-style: none;

      li {
        width: 300px;
        margin-bottom: 1.25rem;

        display: flex;
        align-items: center;
        gap: 0.75rem;

        span {
          width: 32px;
          height: 32px;
          border-radius: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            fill: ${(props) => props.theme.white};
          }
        }

        &:nth-child(1) span {
          background: ${(props) => props.theme['yellow-900']};
        }
        &:nth-child(2) span {
          background: ${(props) => props.theme['gray-700']};
        }
        &:nth-child(3) span {
          background: ${(props) => props.theme['yellow-500']};
        }
        &:nth-child(4) span {
          background: ${(props) => props.theme['purple-500']};
        }
      }
    }
  }

  img {
    max-width: 476px;
    width: 100%;
    height: auto;
  }
`

export const MainContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`
