import Chip from "@mui/material/Chip"
const ChipList = (props) => {

    return (
        <div className="mx-1 my-1">
            <Chip size="medium" label={ props.name } variant="outlined" onClick={ () => props.callback(props.id) } />
        </div>
    )
}

export default ChipList