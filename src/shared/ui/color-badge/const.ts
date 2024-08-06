import {Colors, WidthTypes} from './props.ts'

export const BackgroundValues: {[key in Colors]: string} = {
  blue: '#49C2E8',
  black: '#000000',
  green: '#83C872',
  orange: '#EFA638',
  red: '#E25B5B',
  yellow: '#F7FB53',
  rainbow: 'linear-gradient(180deg, rgba(255,0,0,1) 16%, rgba(255,160,0,1) 16%, rgba(255,160,0,1) 32%, rgba(255,250,0,1) 32%, rgba(255,250,0,1) 48%, rgba(33,196,48,1) 48%, rgba(33,196,48,1) 64%, rgba(5,82,169,1) 64%, rgba(5,88,173,1) 82%, rgba(160,15,160,1) 82%, rgba(160,15,160,1) 100%)'
}

export const WidthValues: {[key in WidthTypes]: string} = {
  standard: '30px',
  mini: '12px'
}
