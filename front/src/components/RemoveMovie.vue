<template>
    <button class="m-3 btn btn-sm btn-danger" @click="removeAllMovies">
    Remove All
    </button>
</template>
<script>
import MovieDataService from "../services/MovieDataService";
export default {
  name: "remove-movie",
  data() {
    return {
      movies: [],
      currentMovie: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    removeAllMovies() {
      MovieDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
};
</script>
