<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/> <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div v-if="movies">
      <h4>Movies</h4>
       <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(currentMovie, index) in movies"
          :key="index"
          @click="setActiveMovie(currentMovie, index)">
          <div>
            <img v-bind:src="currentMovie.url" alt="Image du film">
          </div>
          <div>
            <label><strong>Title:</strong></label> {{ currentMovie.title }}
          </div>
          <div>
            <label><strong>Description:</strong></label> {{ currentMovie.description }}
          </div>
          <div>
            <label><strong>Status:</strong></label> {{ currentMovie.published ? "Published" : "Pending" }}
          </div>
          <router-link :to="'/movies/' + currentMovie.id" class="badge badge-warning">Edit</router-link>
        </li>
        </ul>
      </div>
        <div v-if="currentMovie">
        </div>
      <div v-else>
        <br />
        <p>Please click on a Movie...</p>
      </div>
    </div>
  </div>
</template>
<script>
import MovieDataService from "../services/MovieDataService";
export default {
  name: "movies-list",
  data() {
    return {
      movies: [],
      currentMovie: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveMovies() {
      MovieDataService.getAll()
        .then(response => {
          this.movies = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveMovies();
      this.currentMovie = null;
      this.currentIndex = -1;
    },
    setActiveMovie(movie, index) {
      this.currentMovie = movie;
      this.currentIndex = movie ? index : -1;
    },
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
    
    searchTitle() {
      MovieDataService.findByTitle(this.title)
        .then(response => {
          this.movies = response.data;
          this.setActiveMovie(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveMovies();
  }
};
</script>
<style>
.list {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  max-width: 750px;
  margin: auto;
}
img {
  align-items: center;
  justify-content: center;
  width:427px;
}
</style>
