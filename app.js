const App = {
  data() {
    return {
      placeholderString: "Введите заметку или задачу",
      title: "ToDo List",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2", "Заметка 231"],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 20) this.inputValue = "";
      console.log(value);
    },
  },
};

Vue.createApp(App).mount("#app");
