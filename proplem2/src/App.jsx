import { useState,useEffect } from 'react'
import './App.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import { currencies } from './currency'

function App() {
  const [count, setCount] = useState(1000)
  const [from, setFrom] = useState(['USD']);
  const [to, setTo] = useState(['BLUR']);
  const [valued,setValued] = useState(0)

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log('typeof value',typeof value)
    setFrom(typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeTo = (event) => {
    const {
      target: { value },
    } = event;
    console.log('value',value)
    setTo(typeof value === 'string' ? value.split(',') : value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  console.log('from',from)
  console.log('to',to)

  useEffect(() => {
    const currencyFrom = currencies.find((obj) => obj.currency === from[0]);
    const currencyTo = currencies.find((obj) => obj.currency === to[0]);
    const valueFrom = currencyFrom?.price
    const valueTo = currencyTo?.price
    const result = (count*valueTo)/valueFrom
    console.log('result',result)
    setValued(
     result
    )
  },[count,from,to])


  return (
    <>
      <div className="border-2 border-black rounded-2xl bg-currency bg-cover bg-[left_0px_top_-125px] mt-20">
      <div className='mt-10 font-bold text-2xl text-white'>Currency Exchange</div>
        <div className="flex flex-row justify-between mb-10 mx-5 mt-10">
          <div className="flex flex-col w-[45%] gap-2">
            <p className="flex justify-start font-semibold text-white text-lg">From</p>
            <div className='border hover:border-2 border-black rounded-lg py-3 flex flex-row justify-between px-5 bg-white'>
              <div className='flex justify-center text-center'>
                <input
                  type='number'
                  value={count}
                  onChange={e => 
                    setCount(Number(e.target.value))
                   
                  }
                  defaultValue={1000}
                  className='text-lg'
                />
              </div>
              <div >
                <FormControl sx={{ mx: 0, width: 200 }} >
                  <InputLabel id="demo-multiple-checkbox-label"></InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    value={from}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                    renderValue={(selected) => {
                      const selectedCurrency = currencies.find((obj) => obj.currency === selected[0]);
                      console.log('selected', selected)
                      return (
                        <div className='flex flex-row gap-3'>
                          <img
                            src={selectedCurrency?.icon}
                            alt={selectedCurrency?.currency}
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "10px",
                            }}
                          />
                          <span className='flex text-center items-center'>{selectedCurrency?.currency}</span>
                        </div>
                      );
                    }}
                  >
                    {currencies.map((obj) => (
                      <MenuItem key={obj.currency} value={obj.currency} className='flex flex-row gap-3' sx={{
                        display: "flex",
                        flexDirection: "row", // Sắp xếp hình ảnh và text theo hàng ngang
                        gap: 2, // Khoảng cách giữa hình ảnh và text
                        alignItems: "center", // Căn giữa theo chiều dọc
                      }}>
                        <img
                          src={obj.icon}
                          style={{
                            width: '25px',
                            height: 'auto',
                            borderRadius: '10px',
                          }} />
                        <ListItemText primary={obj.currency} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[45%] gap-2">
            <p className="flex justify-start font-semibold text-white text-lg">To</p>
            <div className='border  hover:border-2 border-black rounded-lg py-3 flex flex-row justify-between px-5 bg-white'>
              <div className='flex justify-center text-center'>
                <input
                  value={valued}
                  onChange={e => setValued(Number(e.target.value))}
                  defaultValue={valued}
                  className='text-lg'
                  readOnly={true}
                />
              </div>
              <div>
              <FormControl sx={{ mx: 0, width: 200 }} >
                  <InputLabel id="demo-multiple-checkbox-label"></InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    value={to}
                    onChange={handleChangeTo}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                    renderValue={(selected) => {
                      const selectedCurrency = currencies.find((obj) => obj.currency === selected[0]);
                      console.log('selected', selected)
                      return (
                        <div className='flex flex-row gap-3'>
                          <img
                            src={selectedCurrency?.icon}
                            alt={selectedCurrency?.currency}
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "10px",
                            }}
                          />
                          <span className='flex text-center items-center'>{selectedCurrency?.currency}</span>
                        </div>
                      );
                    }}
                  >
                    {currencies.map((obj) => (
                      <MenuItem key={obj.currency} value={obj.currency} className='flex flex-row gap-3' sx={{
                        display: "flex",
                        flexDirection: "row", // Sắp xếp hình ảnh và text theo hàng ngang
                        gap: 2, // Khoảng cách giữa hình ảnh và text
                        alignItems: "center", // Căn giữa theo chiều dọc
                      }}>
                        <img
                          src={obj.icon}
                          style={{
                            width: '25px',
                            height: 'auto',
                            borderRadius: '10px',
                          }} />
                        <ListItemText primary={obj.currency} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
