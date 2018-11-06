import React from "react";
import { connect } from "react-redux";
import Results from './Results';
import ReusableButton from './ReusableButton';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedMovies: [], 
        };
    }
    componentWillReceiveProps(next) {
        if (next.movies !== this.props.movies) {
            this.setState({ sortedMovies: next.movies })
        }
    }
    render () {
        const { movies, title } = this.props;
        const { sortedMovies } = this.state;
        console.log('sortedMovies: ', movies, sortedMovies);
        const compare = (kind) => (a, b) => {
            const A = typeof a[kind] === 'string' ? a[kind].toUpperCase() : a[kind].slice(0, 4);
            const B = typeof b[kind] === 'string' ? b[kind].toUpperCase() : b[kind].slice(0, 4);
          
            let comparison = 0;
            if (A > B) {
              comparison = 1;
            } else if (A < B) {
              comparison = -1;
            }
            return comparison;
        }
          
        return (
            <div>
                {title &&
                    <h1>Results for {title}</h1>
                }
                {movies.length > 1 && <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <p style={{ marginLeft: '20px' }}>Sort by:</p>
                    <div
                        style={{
                            margin: '10px',
                        }}
                    >
                        <ReusableButton
                            buttonTitle={'Relevance'}
                            buttonFunction={() => {
                                this.setState({ sortedMovies: this.props.movies })
                            }}
                        />
                        <ReusableButton
                            buttonTitle={'Year'}
                            buttonFunction={() => {
                                const newSorted = sortedMovies.map((m) => m);
                                const moviesByYear = newSorted.sort(compare('Year'));
                                this.setState({ sortedMovies: moviesByYear })
                            }}
                        />
                        <ReusableButton
                            buttonTitle={'Title'}
                            buttonFunction={() => {
                                const newSorted = sortedMovies.map((m) => m);
                                const moviesByTitle = newSorted.sort(compare('Title'));
                                this.setState({ sortedMovies: moviesByTitle })
                            }}
                        />
                    </div>
                </div>}
                <table
                    style={{
                        borderRadius: '7px',
                    }}
                >
                    {movies.length > 0 && <tbody
                        style={{ textAlign: 'left' }}
                    >
                        <Results movies={sortedMovies} />
                    </tbody>}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.results,
    title: state.title,
  });
  
  
  export default connect(mapStateToProps)(Table);
  