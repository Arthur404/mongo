import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const locationActions = {
    loadLocations() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_LOCATION_REQUEST
        });

        api.listLocation()
            .then(({ data }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_LOCATION_SUCCESS,
                    locations: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_LOCATION_FAIL,
                    error: err
                })
            );
    },

    createLocation(note) {
        api.createLocation(note)
            .then(() =>
                this.loadLocations()
            )
            .catch(err =>
                console.error(err)
            );
    },

    deleteLocation(noteId) {
        api.deleteLocation(noteId)
            .then(() =>
                this.loadLocations()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default locationActions;