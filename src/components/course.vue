<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <h2>Course Screen</h2>
          <form @submit.prevent="addCourse">
            <div class="form-group">
              <label for>Course ID</label>
              <input
                type="text"
                class="form-control"
                v-model="id"
                :class="{'is-invalid':submitted && $v.id.$error}"
              />
              <div
                v-if="submitted && !$v.id.required"
                class="invalid-feedback"
              >Course ID is required</div>
            </div>

            <div class="form-group">
              <label for>Course Name</label>
              <input
                type="text"
                class="form-control"
                v-model="CourseName"
                :class="{'is-invalid': submitted && $v.CourseName.$error}"
              />
              <div
                v-if="submitted && !$v.CourseName.required"
                class="invalid-feedback"
              >Course Name is required</div>
            </div>

            <div class="form-group">
              <label for>Professor</label>
              <input
                type="text"
                class="form-control"
                v-model="professor"
                :class="{'is-invalid': submitted && $v.professor.$error}"
              />
              <div
                v-if="submitted && !$v.professor.required"
                class="invalid-feedback"
              >Proffesor is required</div>
            </div>
            <div class="form-group">
              <label for="sel1">Students</label>
              <select multiple class="form-control" v-model="student">
                <option v-bind:key="option._id" v-for="option in options.data">{{option.name}}</option>
              </select>
            </div>

            <input type="submit" value="Register" class="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import DataService from "../services/dataservices";

export default {
  name: "course",

  data() {
    return {
      id: "",
      CourseName: "",
      professor: "",
      student: [],
      options: [],

     
      submitted: false
    };
  },
   async created() {
        try {
          this.options = await DataService.GetStudents();
        } catch (error) {
          alert("Please connect backend first");
        }
      },
  validations: {
    id: {
      required
    },
    CourseName: {
      required
    },
    professor: {
      required
    }
  },
  methods: {
    async addCourse() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const course = {
        cid: this.id,
        CourseName: this.CourseName,
        professor: this.professor,
        students: this.student
      };
      await DataService.AddCourse(course);
      alert("Course Details Submitted Successfully");
    }
  }
};
</script>

<style>
</style>