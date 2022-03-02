<template>
  <div class="submit-form">
  <div v-if="!submitted">
  <h4>Add new Movie</h4>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="movie.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="actors">Actors</label>
        <input
          class="form-control"
          id="actors"
          required
          v-model="movie.actors"
          name="actors"
        />
      </div>
      <div class="form-group">
        <label for="productors">Productors</label>
        <input
          class="form-control"
          id="productors"
          required
          v-model="movie.productors"
          name="productors"
        />
      </div>
      <div class="form-group">
        <label for="validationTextarea">Description</label>
        <textarea class="form-control" name="description" id="description" v-model="movie.description" required></textarea>
      </div>
      <div class="form-group">
      <label for="date">Date</label>
          <Datepicker v-model="movie.date" placeholder="Enter Date"></Datepicker>
      </div>
      <div class="form-group">
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" name="published"  v-model="movie.published" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Published</label>
</div>
        </div>
      <div class="form-group">
        <label for="url">Url</label>
        <input
          class="form-control"
          id="url"
          required
          v-model="movie.url"
          name="url"
        />
      </div>
      <button @click="saveMovie" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newMovie">Add</button>
    </div>
  </div>
</template>
<script>
import MovieDataService from "../services/MovieDataService";
import Datepicker from 'vue3-date-time-picker';
export default {
  name: "add-movie",
  components: { Datepicker },
  data() {
    return {
      movie: {
        id: null,
        title: "",
        actors: "",
        productors:"",
        description: "",
        date: null,
        published: false,
        url: ""
      },
      submitted: false,
      date: null
    };
  },
  methods: {
    saveMovie() {
      var data = {
        title: this.movie.title,
        actors: this.movie.actors,
        productors: this.movie.productors,
        description: this.movie.description,
        date: this.movie.date,
        published: this.movie.published,
        url: this.movie.url
      };
      MovieDataService.create(data)
        .then(response => {
          this.movie.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newMovie() {
      this.submitted = false;
      this.movie = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>