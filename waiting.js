// ** React Imports

import PropTypes from 'prop-types'
// ** MUI Components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'

import Image from 'next/image'
import { styled } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'

import { useSettings } from 'src/@core/hooks/useSettings'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '70%' },

  [theme.breakpoints.up('md')]: { width: '50%' }
}))

const PleaseWaitPage = props => {
  const { settings } = useSettings()
  console.log(settings)

  return (
    <Box
      className='content-center'
      sx={{
        backgroundImage: "url('/images/feedback/bg-pattern.svg')",
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
        <Image src={settings.logo} width={120} height={32} alt='Brand Logo' />
      </Box>
      <Card sx={{ zIndex: 1, backgroundColor: '#fff' }}>
        <CardContent
          sx={{
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            padding: theme => `${theme.spacing(9, 9, 7)} !important`
          }}
        >
          {' '}
          <svg
            width='100px'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 203 203'
            enableBackground='new 0 0 203 203'
            xmlSpace='preserve'
          >
            <g>
              <path
                className='hourglass'
                fill='none'
                stroke='#C0E5FA'
                strokeWidth='5'
                strokeLinecap='round'
                strokeMiterlimit='10'
                d='M137.5,169.5h-72
		c0-72,63-73,63-126h-54C74.5,96.5,137.5,97.5,137.5,169.5z'
              />
              <path
                className='hourglass'
                fill='none'
                stroke='#74C2EE'
                strokeWidth='5'
                strokeLinecap='round'
                strokeMiterlimit='10'
                d='M65.5,34.5h72
		c0,71-63,71-63,126h54C128.5,105.5,65.5,105.5,65.5,34.5z'
              />
            </g>
            <g>
              <path
                className='half-circle'
                fill='none'
                stroke='#C0E5FA'
                strokeWidth='5'
                strokeLinecap='round'
                strokeMiterlimit='10'
                d='M2.5,101.5
		c0-54.676,44.324-99,99-99c54.676,0,99,44.324,99,99'
              />
              <path
                className='half-circle'
                fill='none'
                stroke='#74C2EE'
                strokeWidth='5'
                strokeLinecap='round'
                strokeMiterlimit='10'
                d='M200.5,101.5
		c0,54.676-44.324,99-99,99c-54.676,0-99-44.324-99-99'
              />
            </g>
          </svg>
          <Typography variant='h5' sx={{ mt: 9, mb: 1, fontWeight: 700 }}>
            Please Wait for the Agent to Join the Meeting.
          </Typography>
          <Typography variant='body1' sx={{ mt: 2, width: { xs: '100%', md: '80%' } }}>
            We're Sorry for the inconvenience caused. The Product agent will join the meeting soon.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
PleaseWaitPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default PleaseWaitPage

PleaseWaitPage.propTypes = {
  scheduleTime: PropTypes.string
}



//// css
.half-circle {
  stroke-dasharray: 314.1592653589793;
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
  stroke-dashoffset: 264;
  animation: rotateCircle 2.2s cubic-bezier(0.645, 0.045, 0.355, 1) infinite both,
    delayedSnake 2.2s ease-in-out infinite;
}
.hourglass {
  stroke-dasharray: 210;
  animation: snake 3s linear infinite both;
}
@-moz-keyframes rotateCircle {
  0% {
    transform: rotate(-105deg);
  }
  5% {
    transform: rotate(-105deg);
  }
  95% {
    transform: rotate(105deg);
  }
  100% {
    transform: rotate(105deg);
  }
}
@-webkit-keyframes rotateCircle {
  0% {
    transform: rotate(-105deg);
  }
  5% {
    transform: rotate(-105deg);
  }
  95% {
    transform: rotate(105deg);
  }
  100% {
    transform: rotate(105deg);
  }
}
@-o-keyframes rotateCircle {
  0% {
    transform: rotate(-105deg);
  }
  5% {
    transform: rotate(-105deg);
  }
  95% {
    transform: rotate(105deg);
  }
  100% {
    transform: rotate(105deg);
  }
}
@keyframes rotateCircle {
  0% {
    transform: rotate(-105deg);
  }
  5% {
    transform: rotate(-105deg);
  }
  95% {
    transform: rotate(105deg);
  }
  100% {
    transform: rotate(105deg);
  }
}
@-moz-keyframes delayedSnake {
  0% {
    stroke-dashoffset: 260;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -260;
  }
}
@-webkit-keyframes delayedSnake {
  0% {
    stroke-dashoffset: 260;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -260;
  }
}
@-o-keyframes delayedSnake {
  0% {
    stroke-dashoffset: 260;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -260;
  }
}
@keyframes delayedSnake {
  0% {
    stroke-dashoffset: 260;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -260;
  }
}
@-moz-keyframes snake {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 420;
  }
}
@-webkit-keyframes snake {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 420;
  }
}
@-o-keyframes snake {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 420;
  }
}
@keyframes snake {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 420;
  }
}
