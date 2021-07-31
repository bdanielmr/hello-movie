/* eslint-disable no-case-declarations */
const types = {
  getTrendingMoviesSuccess: 'get - trending - movies - success',
  getTrendingMoviesError: 'get - trending - movies - error',
  getSearchMovies: 'get - search - movies',
  getMovie: 'get - movie',
  getPaginaMovie: 'get - pagina - movie',
  getInfoMovie: 'get - info - movie',
};

const initialStore = {
  movie: { id: 0, title: 'blond' },
  listMovies: [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie ' },
  ],
  listMoviesLoading: false,
  listMoviesError: [],
  paginationList: null,
  infoMovie: {},
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.getTrendingMoviesSuccess:
      return {
        ...state,
        listMovies: action.payload,
        paginationList: action.allPayload,
      };
    case types.getTrendingMoviesError:
      return {
        ...state,
        listMoviesError: action.payload,
      };
    case types.getPaginaMovie:
      return {
        ...state,
        listMovies: action.payload,
      };
    case types.getInfoMovie:
      return {
        ...state,
        infoMovie: action.payload,
      };
    case types.getSearchMovies:
      return {
        ...state,
        listMovies: action.payload,
      };
    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
