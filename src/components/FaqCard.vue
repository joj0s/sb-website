<template>
  <div>
    <b-card no-body class="question">
      <b-card-header
        header-tag="header"
        class="question__top-wrapper"
        role="tab"
        @click="toggleClicked(index)"
        :ref="'toggle' + index"
        :test="'toggle' + index"
        v-b-toggle="'accordion' + index"
      >
        <h3 class="question__heading" :ref="'heading' + index">
          {{ question.question }}
        </h3>
        <i class="question__toggle">
          <font-awesome
            :ref="'icon' + index"
            class="question__icon"
            icon="chevron-down"
            size="lg"
          />
        </i>
      </b-card-header>
      <b-collapse :id="'accordion' + index" role="tabpanel">
        <b-card-body>
          <b-card-text v-html="question.content"></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
      validator: (question) => {
        return (
          !!question.question &&
          typeof question.question == "string" &&
          !!question.content
        );
      },
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleClicked(index) {
      const toggleElement = this.$refs["toggle" + index];
      if (toggleElement.classList.contains("collapsed")) {
        this.$refs["icon" + index].classList.add("collapsed");
        this.$refs["icon" + index].classList.remove("not-collapsed");
        this.$refs["heading" + index].classList.add("not-collapsed");
      } else {
        this.$refs["icon" + index].classList.add("not-collapsed");
        this.$refs["icon" + index].classList.remove("collapsed");
        this.$refs["heading" + index].classList.remove("not-collapsed");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.question {
  border: none !important;
  background: none !important;
  margin-bottom: 30px;

  &__top-wrapper {
    cursor: pointer;
    background: none;
    border: none !important;
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
    align-items: center;
  }

  &__heading {
    padding-right: 10px;
    font-size: 1.6em;
  }

  &__heading.not-collapsed {
    color: $light-blue !important;
  }

  &__toggle {
    color: $dark-gray;

    :hover {
      cursor: pointer;
    }
  }

  &__top-wrapper {
    &:focus {
      outline: none;
    }
  }

  &__icon.not-collapsed {
    color: $dark-gray;
    transform: rotate(0deg);
    transition: transform 0.3s linear;
  }

  &__icon.collapsed {
    color: $light-blue;
    transform: rotate(180deg);
    transition: transform 0.3s linear;
  }
}
</style>
