<template>
  <div v-if="currentMovie" class="edit-form">
    <h4>Movie</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentMovie.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentMovie.description"
        />
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentMovie.published ? "Published" : "Pending" }}
      </div>
    </form>
    <button class="badge badge-primary mr-2"
      v-if="currentMovie.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>
    <button class="badge badge-danger mr-2"
      @click="deleteMovie"
    >
      Delete
    </button>
    <button type="submit" class="badge badge-success"
      @click="updateMovie"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Movie...</p>
  </div>
</template>
<script>
import MovieDataService from "../services/MovieDataService";
export default {
  name: "movie",
  data() {
    return {
      currentMovie: null,
      message: ''
    };
  },
  methods: {
    getMovie(id) {
      MovieDataService.get(id)
        .then(response => {
          this.currentMovie = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        id: this.currentMovie.id,
        title: this.currentMovie.title,
        description: this.currentMovie.description,
        published: status
      };
      MovieDataService.update(this.currentMovie.id, data)
        .then(response => {
          console.log(response.data);
          this.currentMovie.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateMovie() {
      MovieDataService.update(this.currentMovie.id, this.currentMovie)
        .then(response => {
          console.log(response.data);
          this.message = 'The movie was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMovie() {
      MovieDataService.delete(this.currentMovie.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "movies" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMovie(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>