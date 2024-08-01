import {FontSetting, HeadingLevel, TypographyName} from './types.ts'

export const FontSettings: {[key in TypographyName]: FontSetting} = {
  '12': {
    fontSize: '12px',
    weight: '500',
    lineHeight: '15.1px'
  },
  '16 / R': {
    fontSize: '16px',
    weight: '400',
    lineHeight: '20px'
  },
  '16 / M': {
    fontSize: '15px',
    weight: '500',
    lineHeight: '20px'
  },
  '20 / M': {
    fontSize: '20px',
    weight: '500',
    lineHeight: '44px'
  },
  '40 / B': {
    fontSize: '40px',
    weight: '700',
    lineHeight: '50.32px'
  }
}

export const HeadingFontSettings: {[key in HeadingLevel]: FontSetting} = {
  '1': FontSettings['40 / B']
}
