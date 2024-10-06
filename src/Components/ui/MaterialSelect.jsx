import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MaterialSelect({label, items, value, setValue}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Define the gray color and its variants
  const grayColor = 'rgb(55, 65, 81)';
  const grayColorLight = 'rgb(55, 65, 81, 0.08)';
  const grayColorHover = 'rgb(55, 65, 81, 0.12)';

  return (
    <Box sx={{ 
      width: 180,
      '& .MuiOutlinedInput-root': {
        height: '40px',
        borderRadius: 1,
        color: grayColor,
        transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(55, 65, 81, 0.12)',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: grayColor,
          }
        }
      },
      '& .MuiSelect-select': {
        py: 1,
        px: 1.5,
        minHeight: '0 !important',
        display: 'flex',
        alignItems: 'center'
      },
      '& .MuiInputLabel-root': {
        color: grayColor,
        transform: 'translate(14px, 8px) scale(1)',
        '&.Mui-focused, &.MuiFormLabel-filled': {
          transform: 'translate(14px, -9px) scale(0.75)',
          color: grayColor
        }
      }
    }}>
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1,
              borderColor: 'rgb(55, 65, 81, 0.2)'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: grayColor
            },
            '& .MuiSvgIcon-root': { // Customize dropdown icon
              color: grayColor
            }
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                mt: 0.5,
                boxShadow: '0 4px 12px rgba(55, 65, 81, 0.1)',
                '& .MuiList-root': {
                  py: 0.5
                }
              }
            }
          }}
        >
          {items.map((item) => (
            <MenuItem 
              key={item.key} 
              value={item.key}
              sx={{
                height: '32px',
                my: 0.25,
                mx: 0.5,
                borderRadius: 0.5,
                fontSize: '0.875rem',
                color: grayColor,
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: grayColorLight,
                  boxShadow: '0 2px 4px rgba(55, 65, 81, 0.08)'
                },
                '&.Mui-selected': {
                  bgcolor: grayColorHover,
                  '&:hover': {
                    bgcolor: grayColorHover
                  }
                }
              }}
            >
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}