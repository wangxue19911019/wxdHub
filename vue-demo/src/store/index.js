import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import layout from './modules/layout';

Vue.use(Vuex)

const debug = process.env.NODE_ENV != 'production'

export {
  types
}

export default new Vuex.Store({
  modules: {
    layout
  },
  plugin: debug ? [] : []
})
