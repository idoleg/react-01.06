import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export  function ChatList({chats}) {
  const classes = useStyles();

  return <FormControl className={classes.formControl}>
    <InputLabel htmlFor="name-native-simple">Chats</InputLabel>
  
    <Select
    native
    
    inputProps={{
      name: 'name',
      id: 'name-native-simple',
    }}
  >
      
    {chats.map((item,index) => <option value={index} key={index}>{item.name}</option>  )}
    
  </Select>
</FormControl>
}


ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape(Object)).isRequired,
}
