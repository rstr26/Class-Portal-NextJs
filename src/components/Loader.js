import { CircularProgress } from "@mui/material"

const Loader = ({ text }) => {
  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <CircularProgress />
        <h3>{text}</h3>
    </div>
  )
}

export default Loader