<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <h2>Student Screen</h2>
          <form @submit.prevent="AddStudent">
            <div class="form-group">
              <label for>Roll No</label>
              <input
                type="text"
                class="form-control"
                v-model="rollNo"
                :class="{'is-invalid':submitted && $v.rollNo.$error}"
              />
              <div
                v-if="submitted && !$v.rollNo.required"
                class="invalid-feedback"
              >Roll No is required</div>
            </div>

            <div class="form-group">
              <label for>Name</label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                :class="{'is-invalid': submitted && $v.name.$error}"
              />
              <div v-if="submitted && !$v.name.required" class="invalid-feedback">Name is required</div>
            </div>

            <div class="form-group">
              <label for>Address</label>
              <input
                type="text"
                class="form-control"
                v-model="address"
                :class="{'is-invalid': submitted && $v.address.$error}"
              />
              <div
                v-if="submitted && !$v.address.required"
                class="invalid-feedback"
              >Address is required</div>
            </div>

            <div class="form-group">
              <label for>College</label>
              <input
                type="text"
                class="form-control"
                v-model="college"
                :class="{'is-invalid':submitted && $v.college.$error}"
              />
              <div
                v-if="submitted && !$v.college.required"
                class="invalid-feedback"
              >Collge is required</div>
            </div>
            <div class="form-group">
              <label for="sel1">Course</label>
              <select multiple class="form-control" v-model="course">
                <option v-bind:key="option._id" v-for="option in options.data">{{option.CourseName}}</option>
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

// import { validationMixin } from 'vuelidate'
export default {
  name: "student",
  // mixins: [validationMixin],
  data() {
    return {
      rollNo: "",
      name: "",
      address: "",
      college: "",
      course: [],
      options: [],

      submitted: false
    };
  },
  async created() {
    try {
      this.options = await DataService.GetCourses();
    } catch (error) {
       alert("Please connect backend first");
    }
  },
  validations: {
    rollNo: {
      required
    },
    name: {
      required
    },
    address: {
      required
    },
    college: {
      required
    }
  },
  methods: {
    async AddStudent() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const user = {
        rollNo: this.rollNo,
        name: this.name,
        address: this.address,
        college: this.college,
        courses: this.course
      };
      await DataService.AddStudent(user);

      alert("Student Details Submitted Successfully");
    }
  }
};
</script>

<style>
</style>