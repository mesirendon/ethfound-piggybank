<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{name: 'home'}">Piggy Bank</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{name: 'about'}">About us</router-link>
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="button" v-if="isLogged"
                @click="disconnect">
          0xF0d9...213dC2
        </button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-else @click="connect">
          Connect
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import * as constants from '@/store/constants';

export default {
  name: 'Top',
  computed: {
    ...mapGetters({
      isLogged: constants.SESSION_IS_LOGGED,
    }),
  },
  methods: {
    ...mapMutations({
      setSessionProperty: constants.SESSION_SET_PROPERTY,
    }),
    connect() {
      this.setSessionProperty({ account: '0x123abc123bcd' });
    },
    disconnect() {
      this.setSessionProperty({ account: null });
    },
  },
};
</script>
