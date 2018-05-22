import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _location = [];
let _locationError = null;
let _isLoadingLoc = true;

function formatLocation(location) {
    return {
        id: location._id,
        city: location.city,
        address: location.address
    };
}

const LocationsStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoadingLoc;
    },

    getLocation() {
        return _location;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_LOCATION_REQUEST: {
            _isLoadingLoc = true;

            LocationsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_LOCATION_SUCCESS: {
            _isLoadingLoc = false;
            _location = action.locations.map( formatLocation );
            _locationError = null;

            LocationsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_LOCATION_FAIL: {
            _locationError = action.error;

            LocationsStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default LocationsStore;