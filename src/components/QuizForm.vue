<template>
  <form @submit.prevent="onSubmit" class="screen">
    <div class="container">
      <div class="row">
        <h1 class="title">Now, about your project...</h1>
      </div>
      <div class="row">
        <div class="col-7">
          <div class="section">
            <p>
              We like being on a first-name basis, but it also helps us get in
              touch with you.
            </p>
            <div class="form-group">
              <div class="form-item col">
                <label for="name">What is your full name?</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  v-model="quiz.fullName"
                  :class="{ error: error.status, success: success.status }"
                />
                <p
                  :class="{
                    'error-text': error.status,
                    'success-text': success.status,
                  }"
                  v-if="error.status || success.status"
                >
                  {{ error.text || success.text }}
                </p>
              </div>
              <div class="form-item col">
                <label for="email">What is your email address?</label>
                <input
                  id="email"
                  type="email"
                  placeholder="a@gmail.com"
                  v-model="quiz.email"
                />
              </div>
            </div>
          </div>
          <div class="section options">
            <p>
              What sort of creative work do you need help with? You can read
              about our services
            </p>
            <div class="row">
              <div class="col-4" v-for="option in jobOptions" :key="option.id">
                <div
                  class="block"
                  :style="{
                    backgroundColor: quiz.jobs.includes(option.id)
                      ? 'var(--primary)'
                      : '',
                  }"
                >
                  <label class="option">
                    <span>{{ option.name }}</span>
                    <input
                      type="checkbox"
                      :value="option.id"
                      v-model="quiz.jobs"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="section right">
            <p>
              Tell us what you need help with, the purpose of this project and
              problems wr’re solving.
            </p>
            <div class="form-item">
              <label for="about">What is your project all about?</label>
              <textarea
                id="about"
                placeholder="Hey RHP Team, I’d love  to talk to you about  branding this Something AI  project we’re working..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="action">
      <div class="container">
        <button type="submit" class="btn btn-submit">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      quiz: {
        fullName: "",
        email: "",
        desc: "",
        jobs: [],
      },
      error: {
        text: "",
        status: false,
      },
      success: {
        text: "",
        status: false,
      },
      jobOptions: [
        {
          id: 1,
          name: "Branding",
        },
        {
          id: 2,
          name: "Strategy",
        },
        {
          id: 3,
          name: "Motion Design",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log(this.quiz);
      if (this.quiz.fullName < 6 || this.quiz.fullName > 50) {
        this.error = {
          text: "Name must be between 6 and 50 characters",
          status: true,
        };
        return;
      } else {
        this.error = {
          text: "",
          status: false,
        };
        this.success = {
          text: "Form submitted successfully",
          status: true,
        };
      }
    },
  },
};
</script>
