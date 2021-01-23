// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as allPlayers} from '../store/utilities/allPlayers';
// export { default as singleCampus} from '../store/utilities/singleCampus';
// export { default as campus} from '../store/utilities/campus';
export { default as singleCampus} from '../store/utilities/singleCampus';
