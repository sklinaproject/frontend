import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  selectDefault: {
    minWidth: 100,
  }
});


//export default function ComboSelect() {
class ComboBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
        toggle: false,
        value: ''
        };
        }

  handleChange = (event) => {
		this.props.setComboBoxVal(event)
	  
	    this.setState({ value: event.target.value})
  };
render() {
  const { classes } = this.props;
	
  return (
    <div>
        <Select
          name={this.props.name}
		  id="selectGendir"
          value={this.state.value}
          onChange={this.handleChange} className={classes.selectDefault}
        >
		<option aria-label="None" value="" />
		  {
            
			this.props.dataList && this.props.dataList.map(data => (
              <option key={data.cdVl} value={data.cdVl}>{data.cdNm}</option>
            ))
          }
        </Select>
    </div>
  );
}
}
export default withStyles(styles)(ComboBox);