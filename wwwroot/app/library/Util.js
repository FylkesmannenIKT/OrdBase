'use strict';

//
// @module Utill
//  @brief small usefull functions which helps reduce repitition.
//

export function mandatory(message = 'Missing parameter') {
    throw new Error(message);
}