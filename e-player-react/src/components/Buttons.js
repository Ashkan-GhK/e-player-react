import React from 'react';
import '../styles/Buttons.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";


const Buttons = () => {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div className="buttons_container">
            <div className="buttons_content_container">
            <ShuffleIcon className="button" />
            <SkipPreviousIcon className="button"/>
            <PlayCircleOutlineIcon className="button"fontSize="large" />
            <SkipNextIcon className="button"/>
            <RepeatIcon className="button"/> 
            </div>
            <div className="valumeBar_container">
                <Grid container spacing={2}>
                   <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                       <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>    
        </div> 
    )
}

export default Buttons;
