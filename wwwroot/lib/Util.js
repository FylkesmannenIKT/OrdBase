'use strict';
//
// @module Utill
//  @brief small usefull functions which helps reduce repitition.
//
export function force(message = '') {
    throw new Error(`Missing parameter: ${message}`);
}