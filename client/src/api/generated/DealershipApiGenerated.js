/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN DealershipApiGenerated.js PLEASE EDIT ../DealershipApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class DealershipApiGenerated {

  static contextUrl = properties.endpoint + "/dealership";

  // CRUD METHODS

  /**
  * dealershipService.create
  *   @description CRUD ACTION create
  *   @param dealership obj Object to insert
  *
  */
  static createDealership(dealership) {
    return axios.post(DealershipApiGenerated.contextUrl, dealership )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * dealershipService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id dealership
  *
  */
  static deleteDealership(id) {
    return axios.delete(DealershipApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * dealershipService.findBybrands
  *   @description CRUD ACTION findBybrands
  *   @param Objectid key Id of model to search for
  *
  */
  static findBybrands(id) {
    return axios.get(DealershipApiGenerated.contextUrl + "/findBybrands/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * dealershipService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id dealership
  *   @returns dealership
  *
  */
  static getOneDealership(id) {
    return axios.get(DealershipApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * dealershipService.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF dealership
  *
  */
  static getDealershipList() {
    return axios.get(DealershipApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * dealershipService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id dealership
  *   @returns dealership
  *
  */
  static saveDealership(dealership) {
    return axios.post(DealershipApiGenerated.contextUrl + "/" + dealership._id, dealership )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default DealershipApiGenerated;
