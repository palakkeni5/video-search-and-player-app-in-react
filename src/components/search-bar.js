import React , {Component} from 'react';

// const SearchBar = () => {
//     return <input/>
// }

class SearchBar extends Component{

    constructor (props){
        super(props)

        this.state = {term : ""};
    }

    render(){
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term} 
                    onChange={ event => this.onInputChange(event.target.value) } />
                <br/>
            </div>
        ) 
    }
    onInputChange(term){
        // console.log(term)
        this.setState({term})
        this.props.onSearchTerm(term);

    }

    // onInputChange(event){
    //     // console.log(event.target.value)
    //     return this.setState({ term : event.target.value })
    // }
}

export default SearchBar;