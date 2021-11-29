import {
    extendTheme,
    theme as base,
    ThemeConfig,
    withDefaultColorScheme,
    withDefaultVariant,
  } from '@chakra-ui/react';
  import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';
  
  const inputSelectStyles = {
    variants: {
      filled: {
        field: {
          _focus: {
            borderColor: 'primary.500',
          },
        },
      },
    },
    sizes: {
      md: {
        field: {
          borderRadius: '5px',
        },
      },
    },
  };
  
  const primaryRing = {
    _focus: {
      ring: 2,
      ringColor: 'primary.700',
    },
  };

  // 2. Add your color mode config
  const config : ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };
  
  const theme = extendTheme(
    {
      ...config,      
      colors: {
        primary: {
          50: '#F6EFFB',
          100: '#D9BFF0',
          200: '#B47FE2',
          300: '#AA6FDE',
          400: '#974FD7',
          500: '#8E3FD3',
          600: '#842FCF',
          700: '#7128B2',
          800: '#602296',
          900: '#571F89',
        },
        secondary: {
            50: '#FEF0F6',
            100: '#FDD1E5',
            200: '#FCA2CA',
            300: '#FB83B9',
            400: '#F964A7',
            500: '#F8368D',
            600: '#F61379',
            700: '#EC096F',
            800: '#C5075D',
            900: '#B10653',

        },
        accent: {
            50: '#f5fee5',
            100: '#e1fbb2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',

        }
      },
      fonts: {
        heading: `Roboto Slab, ${base.fonts?.heading}`,
        body: `Roboto Slab, ${base.fonts?.body}`,
      },
      components: {
        Button: {          
          variants: {
            primary: (props: Dict<any>) => ({
              rounded: 'none',
              ...primaryRing,
              color: mode('white', 'gray.800')(props),
              backgroundColor: mode('primary.500', 'primary.200')(props),              
              _hover: {
                backgroundColor: mode('primary.600', 'primary.300')(props),
              },
  
              _active: {
                backgroundColor: mode('primary.700', 'primary.400')(props),
              },
            }),
          },
        },
        Input: { ...inputSelectStyles },
        Select: { ...inputSelectStyles },
        Checkbox: {
          baseStyle: {
            control: {
              borderRadius: 'none',
              ...primaryRing,
            },
          },
        },
      },
    },
    withDefaultColorScheme({
      colorScheme: 'primary',
      components: ['Checkbox'],
    }),
    withDefaultVariant({
      variant: 'filled',
      components: ['Input', 'Select'],
    })
  );
  
  export default theme;