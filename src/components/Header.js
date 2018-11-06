import React from "react";
import * as actions from '../redux/actions';
import { connect } from "react-redux";
import ReusableButton from './ReusableButton';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "" 
        };
      }
      handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.props.newSearch(this.state.inputVal)
        }
      }
    render () {
        const { newSearch } = this.props;
        const { inputVal } = this.state;
        return (
            <div>
                <input 
                    onChange={(e) => {
                        this.setState({ inputVal: e.target.value })
                    }}
                    style={{
                        backgroundColor: '#FFFB87',
                        borderRadius: '4px',
                        marginRight: '5px',
                        MozBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                        WebkitBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                        boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                    }}
                    placeholder={'Find a movie...'}
                    value={inputVal}
                    onKeyPress={this.handleKeyPress}
                />
                <ReusableButton
                    buttonTitle={'Search'}
                    buttonFunction={() => newSearch(inputVal)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
});
  
const mapDispatchToProps = (dispatch) => ({
    newSearch: (term) => dispatch(actions.startSearch(term)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);