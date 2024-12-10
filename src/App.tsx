/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import { useLocalStorage } from 'usehooks-ts'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs, { Dayjs } from 'dayjs'
import { InputAdornment, OutlinedInput, IconButton, FormControl, TextField, Button, InputLabel } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example s

interface IEvents{
  id:number,
  title:string,
  start:Date,
  end:Date
  desc?:string
  allDay?:boolean

}

const localizer = dayjsLocalizer(dayjs)
const getDayOccurrence=(events:IEvents[],day:(0|1|2|3|4|5|6)):string=>{
  const eventArray =events.filter(e=>dayjs(e.start).day()===day)
  const dayArray = eventArray.map(e=>dayjs(e.start).format("YYYY-MM-DD"))
  return`${eventArray[0].title}:x${dayArray.length}; 開始:${dayArray[0]} 完結:${dayArray[dayArray.length-1]}`
}

const App = () => {
  const [value1, setValue1, removeValue1] = useLocalStorage<string>('mon-user', "")
  const [value2, setValue2, removeValue2] = useLocalStorage<string>('tue-user', "")
  const [value3, setValue3, removeValue3] = useLocalStorage<string>('wed-user', "")
  const [value4, setValue4, removeValue4] = useLocalStorage<string>('thur-user', "")
  const [value5, setValue5, removeValue5] = useLocalStorage<string>('fri-user', "")
  const [value6, setValue6, removeValue6] = useLocalStorage<string>('sat-user', "")
  const [value7, setValue7, removeValue7] = useLocalStorage<string>('sun-user', "")
  const [startDate, setStartDate] = useLocalStorage<Dayjs | null>('start-date', dayjs())
  const [period, setPeriod] = useLocalStorage<number>('period', 0)
  const [cost, setCost] = useLocalStorage<number>('cost', 0)
  const [events,setEvents]=useLocalStorage<IEvents[]>('events',[])
  const [output,setOutput] = useLocalStorage<string>('string-output',"")
  const calculate = ()=>{
    const distinctnamefromValue = new Set([value1,value2,value3,value4,value5,value6,value7])
    const events:IEvents[]=[]
    for(let i=0;i<period;i++){
      const date =dayjs(startDate).add(i,"day")
      const newEvent={
        id:i,
        title:"",
        start:date.toDate(),
        end:date.toDate(),
        allDay:true,
      }
      if(date.day()===1){
          newEvent.title=value1
      }
      if(date.day()===2){
        newEvent.title=value2
      }
      if(date.day()===3){
        newEvent.title=value3
      }
      if(date.day()===4){
        newEvent.title=value4
      }
      if(date.day()===5){
        newEvent.title=value5
      }
      if(date.day()===6){
        newEvent.title=value6
      }
      if(date.day()===0){
        newEvent.title=value7
      }
      events.push(newEvent)
    }
    setEvents(events)
    console.log(events)
    const onetimecost = cost/period
    const output:Record<string,any> = {
      "開始": `(YYYY-MM-DD)${dayjs(events[0].start).format("YYYY-MM-DD")}`,
      "完結":`(YYYY-MM-DD)${dayjs(events[events.length-1].start).format("YYYY-MM-DD")}`,
      "時限": `period days`,
      "Fee": `$${cost} ($${onetimecost.toFixed(2)} per time)`,
      "Mon": getDayOccurrence(events,1),
      "Tue": getDayOccurrence(events,2),
      "Wed": getDayOccurrence(events,3),
      "Thu": getDayOccurrence(events,4),
      "Fri": getDayOccurrence(events,5),
      "Sat": getDayOccurrence(events,6),
      "Sun": getDayOccurrence(events,0)
    }
    
      for(const name of distinctnamefromValue){
          output[name]=(events.filter(e=>e.title===name).length*onetimecost).toFixed(2)
      }
    setOutput(JSON.stringify(output,null,4))
  }
console.log(events)
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
  <div>
    <form>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel >Monday User name</InputLabel>
        <OutlinedInput
          type={ 'text'}
          value={value1}
          onChange={(e)=>setValue1(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={removeValue1}
                edge="end"
                >
                <CloseIcon/>
              </IconButton>
            </InputAdornment>
          }
          label="Monday User name"
          />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel >Tuesday User name</InputLabel>
        <OutlinedInput
          type={ 'text'}
          value={value2}
          onChange={(e)=>setValue2(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={removeValue2}
                edge="end"
                >
                <CloseIcon/>
              </IconButton>
            </InputAdornment>
          }
          label="Tuesday User name"
          />
      </FormControl><FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel >Wednesday User name</InputLabel>
        <OutlinedInput
          type={ 'text'}
          value={value3}
          onChange={(e)=>setValue3(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={removeValue3}
                edge="end"
                >
                <CloseIcon/>
              </IconButton>
            </InputAdornment>
          }
          label="Wednesday User name"
          />
      </FormControl><FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel >Thursday User name</InputLabel>
        <OutlinedInput
          type={ 'text'}
          value={value4}
          onChange={(e)=>setValue4(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={removeValue4}
                edge="end"
                >
                <CloseIcon/>
              </IconButton>
            </InputAdornment>
          }
          label="Thursday User name"
          />
      </FormControl><FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel >Friday User name</InputLabel>
        <OutlinedInput
          type={ 'text'}
          value={value5}
          onChange={(e)=>setValue5(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={removeValue5}
                edge="end"
                >
                <CloseIcon/>
              </IconButton>
            </InputAdornment>
          }
          label="Friday User name"
          />
      </FormControl><FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel >Saturday User name</InputLabel>
        <OutlinedInput
          type={ 'text'}
          value={value6}
          onChange={(e)=>setValue6(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={removeValue6}
                edge="end"
                >
                <CloseIcon/>
              </IconButton>
            </InputAdornment>
          }
          label="Saturday User name"
          />
      </FormControl><FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel >Sunday User name</InputLabel>
        <OutlinedInput
          type={ 'text'}
          value={value7}
          onChange={(e)=>setValue7(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={removeValue7}
                edge="end"
                >
                <CloseIcon/>
              </IconButton>
            </InputAdornment>
          }
          label="Sunday User name"
          />
      </FormControl>
      <DatePicker
        label="Controlled picker"
        value={dayjs(startDate)}
        onChange={(newValue) => setStartDate(dayjs(newValue))}
        />
      <br></br>
      <TextField 
      label="Period" 
      value={period} 
      onChange={(e)=>{setPeriod(Number(e.target.value))}}
      onBlur={(e)=>{
        const reg = new RegExp("^\\d+$");
        if(!reg.test(e.target.value)){
          setPeriod(Number(0))
          alert("only integer is allowed")
        }
      }} variant="outlined" />

      <TextField 
      label="Cost" 
      value={cost} 
      onChange={(e)=>{setCost(Number(e.target.value))}}
      onBlur={(e)=>{
        const reg = new RegExp("^([0-9]*[.])?[0-9]+$");
        if(!reg.test(e.target.value)){
          setCost(Number(0))
          alert("only integer is allowed")
        }
      }}
      variant="outlined" />
         <Button type="button" onClick={()=>calculate()}>submit</Button>
    </form>
    <div className='min-h-[600px]'>

    <Calendar
      showAllEvents={true}
      localizer={localizer}
      events={events}
      // events={events.map(e=>({...e,start:dayjs(e.start),end:dayjs(e.end)}))}
      // events={events.map(e=>({...e,start:{dateTime:dayjs(e.start).toISOString(),timezone:"America/Toronto"},end:{dateTime:dayjs(e.start).toISOString(),timezone:"America/Toronto"}}))}
      startAccessor={(event) => { return dayjs(event.start).toDate() }}
      endAccessor={(event) => { return dayjs(event.end).toDate() }}
      style={{ height: 500 }}
      />
      </div>
      <Editor
      value={output}
      onValueChange={()=>{}}
      highlight={code => highlight(code, languages.js,'js')}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  </div>
      </LocalizationProvider>
)
}
export default App